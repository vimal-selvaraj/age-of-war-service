const Terrain = require("./Terrain.model")

class BattlePlanner{
    constructor(myArmy, opponentArmy){
        this.myArmy=myArmy
        this.opponentArmy=opponentArmy
    }

    simulateBattle(myPlatoon, opponentPlatoon, terrain){
        const myStrength = myPlatoon.getStrength(opponentPlatoon,terrain);
        const opponentStrength = opponentPlatoon.getStrength(opponentPlatoon,terrain);

        if (myStrength > opponentStrength) return "win";
        if (myStrength < opponentStrength) return "loss";
        return "draw";
    }

    findWinningArrangements(minimumWins,advantageMap,firstOccurenceOnly=true,terrains){
        const permutations = this.myArmy.getPermutations()
        let winningArrangements=[]
        for(let arrangement of permutations){
            let result = []
            let wins = 0
            
            for(let i=0; i< arrangement.length; i++){
                const terrain = new Terrain(terrains[i])
                const myPlatoon = arrangement[i]
                const opponentPlatoon = this.opponentArmy.platoonList[i]
                const outcome = this.simulateBattle(myPlatoon, opponentPlatoon, terrain);
                result.push({outcome,myPlatoon,opponentPlatoon})
                if(outcome==='win') wins++
            }

            if(wins>=minimumWins){
                winningArrangements.push({arrangement,result,wins})
                if(firstOccurenceOnly) return winningArrangements
            }
        }
        return winningArrangements.length>0?winningArrangements:null
    }
}
module.exports=BattlePlanner