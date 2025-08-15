const Army = require('../models/Army.model')
const BattlePlanner = require('../models/BattlePlanner.model')

const findWinningArrangements=(myArmyString,opponentArmyString,advantageMap, firstOccurenceOnly)=>{
    const myArmy=Army.fromStringToArmyObjects(myArmyString)
    const opponentArmy=Army.fromStringToArmyObjects(opponentArmyString)

    if(myArmy.platoonList.length !== opponentArmy.platoonList.length){
      console.log("The armies must have the same number of platoons");
      return 
    }

    const winCount = Math.floor(myArmy.platoonList.length / 2) + 1;
    const planner = new BattlePlanner(myArmy,opponentArmy)
    return planner.findWinningArrangements(winCount, advantageMap, firstOccurenceOnly);
}

module.exports={findWinningArrangements}