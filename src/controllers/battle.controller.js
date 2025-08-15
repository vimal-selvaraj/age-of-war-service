const battleService = require("../services/battle.services");

function commenceBattle(req, res) {
    console.log(`Recieved new request ${req?.url}`);
    const { myArmyStr, opponentArmyStr, advantageMap, firstOccurenceOnly } = req.body;

    if (!myArmyStr || !opponentArmyStr) {
        return res.status(400).json({ error: "myArmyStr and opponentArmyStr are required" });
    }

    try {
        const results = battleService.findWinningArrangements(myArmyStr, opponentArmyStr, advantageMap, firstOccurenceOnly);
        if (!results) {
            return res.status(200).json({ statusText:"ok",message: "There is no chance of winning",data: null });
        }

        const response = {
            statusText:"ok",
            message: `Winning Arrangement${firstOccurenceOnly ? "" : "s"} found`,
            data: {
                totalWinning: results.length,
                arrangements: results.map((arr, idx) => ({
                    arrangementNumber: idx + 1,
                    wins: arr.wins,
                    order: arr.arrangement.map(p => p.toString()),
                    results: arr.result.map((r, i) => ({
                        battle: i + 1,
                        myPlatoon: r.myPlatoon.toString(),
                        opponentPlatoon: r.opponentPlatoon.toString(),
                        outcome: r.outcome
                    }))
                }))
            }
        }

        res.status(200).json(response);
    } catch (err) {
        console.log(`Error occurred: ${err?.message} & ${err?.stack}`)
        res.status(500).json({ error: err.message });
    }
}

module.exports = { commenceBattle };
