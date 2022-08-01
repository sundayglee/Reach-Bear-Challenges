'reach 0.1';

export const main = Reach.App(() => {
    setOptions({ untrustworthyMaps: true });
    const D = Participant('D', {
        ready: Fun([], Null),
        getParams: Fun([], Object({
            tokId: Token,
            blockLength: UInt,
            amntToTransfer: UInt
        })),
        deadManSwitch: Bool
    });
    const A = API('A', {
        acceptToken: Fun([], Bool),
        timeIsOut: Fun([], Null)
    });

    const C = API('C', {
        claimToken: Fun([], Bool),
        depositTokens: Fun([UInt], Bool)
    });

    init();

    D.only(() => {
        const { tokId, blockLength, amntToTransfer } = declassify(interact.getParams());
    });

    D.publish(tokId, blockLength, amntToTransfer);
    commit();
    D.publish();

    D.interact.ready();

    const payExpr = (t) => [0, [t, tokId]];

    const WLST = new Set();

    const deadTime = lastConsensusTime() + blockLength;

    const [howMany] = parallelReduce([0])
        .invariant(balance(tokId) >= 0)
        .while(true)      
        .api(
            C.depositTokens,
            // Assumes Expression
            ((amt) => {
                assume(this == D, 'Only the deployer is allowed to run this');
                assume(amt > 0, 'Amount to deposit should be greater than 0');                
            }),
            // Payments Expressinn
            ((amt) => payExpr(amt)),
            // Consensus Expressinn
            ((amt, reply) => {
                require(this == D, 'Only the deployer is allowed to run this');
                require(amt > 0, 'Amount to deposit should be greater than 0');
                reply(true);
                return [howMany];
            })
        ).api(
            C.claimToken,
            // Assumes Expressinn
            (() => {
                assume(amntToTransfer > 0, 'Not enough tokens to distribute');
                assume(balance(tokId) > 0, 'Zero balance of token');
                assume(balance(tokId) >= amntToTransfer / 3 , 'not enough tokens to distribute');
                assume(WLST.member(this) == true, 'YOu already received tokens');
            }),
            // Payments Expressinn
            (() => payExpr(0)),
            // Consensus
            ((reply) => {
                require(amntToTransfer > 0, 'Not enough tokens to distribute');
                require(balance(tokId) > 0, 'Zero balance of token');
                require(balance(tokId) >= amntToTransfer / 3 , 'not enough tokens to distribute');
                require(WLST.member(this) == true, 'You are have not accepted token offer');
                reply(true);

                commit();
                D.only(() => {
                    const deadManSwitch = declassify(interact.deadManSwitch);
                });
                D.publish(deadManSwitch);

                if(deadManSwitch) {
                    transfer([0, [amntToTransfer / 3, tokId]]).to(D);
                } else {
                    transfer([0, [amntToTransfer / 3, tokId]]).to(this);
                }                
                return [howMany];
            })
        )
        .api(
            A.acceptToken,
            // Assumes Expressinn
            (() => {
                assume(howMany <= 3, 'Max white list reached');
                assume(!WLST.member(this), "You have already received token");
            }),
            // Payments Expressinn
            (() => payExpr(0)),
            // Consensus Expressinn
            ((reply) => {
                check(!WLST.member(this), "Already accepted the token")
                require(howMany <= 3, 'Max white list reached');
                WLST.insert(this);
                reply(true);
                
                return [howMany + 1];
            })
        )
        .timeout(absoluteTime(deadTime), () => {
            const [[], k] =
                call(A.timeIsOut);
            k(null);

            return [howMany];
        });

    transfer(balance(tokId), tokId).to(D);
    transfer(balance()).to(D);
    commit();
    exit();
});
