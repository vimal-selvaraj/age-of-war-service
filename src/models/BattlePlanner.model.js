class BattlePlanner{
    constructor(myArmy, opponentArmy){
        this.myArmy=myArmy
        this.opponentArmy=opponentArmy
    }

    findWinningArrangements(minimumWins,advantageMap,firstOccurenceOnly=true){
        const permutations = this.myArmy.getPermutations()
        let winningArrangements=[]
        for(let arrangement of permutations){
            let result = []
            let wins = 0
            
            for(let i=0; i< arrangement.length; i++){
                const myPlatoon = arrangement[i]
                const opponentPlatoon = this.opponentArmy.platoonList[i]
                const outcome = myPlatoon.outcomeAgainstOtherPlatoon(opponentPlatoon,advantageMap)
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