const Army = require('../models/Army.model')
const BattlePlanner = require('../models/BattlePlanner.model')

const findWinningArrangements=(myArmyString,opponentArmyString,terrain,advantageMap, firstOccurenceOnly)=>{
    const myArmy=Army.fromStringToArmyObjects(myArmyString,terrain)
    const opponentArmy=Army.fromStringToArmyObjects(opponentArmyString,terrain)
    const terrains = terrain.split(";")

    if(myArmy.platoonList.length !== opponentArmy.platoonList.length){
      console.log("The armies must have the same number of platoons");
      return 
    }

    const winCount = Math.floor(myArmy.platoonList.length / 2) + 1;
    const planner = new BattlePlanner(myArmy,opponentArmy)
    return planner.findWinningArrangements(winCount, advantageMap, firstOccurenceOnly, terrains);
}

module.exports={findWinningArrangements}