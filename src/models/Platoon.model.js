const advantageMap = require("../utils/Advantage_map");

class Platoon{
    constructor(unitClass,soldierCount){
        this.unitClass = unitClass;
        this.soldierCount = soldierCount;
    }

    hasAdvantageOverOtherPlatoons(otherPlatoon,advantageMap={}){
        const advantageMapList = Object.keys(advantageMap).length>0 ? advantageMap : Platoon.ADVANTAGE_MAP
        return advantageMapList[this.unitClass]?.includes(otherPlatoon?.unitClass);
    }

    getStrength(otherPlatoon,terrain){
       let strength = this.soldierCount * (this.hasAdvantageOverOtherPlatoons(otherPlatoon,advantageMap) ? 2 : 1)
       return strength * terrain.getAdditionalStrength(this.unitClass)

    }

    // outcomeAgainstOtherPlatoon(otherPlatoon){
    //     const myStrength = this.getStrength(otherPlatoon)
    //     const opponentStrength = otherPlatoon.soldierCount;
       
    //     if(myStrength>opponentStrength) {
    //         return "win";
    //     }else if(myStrength<opponentStrength){
    //         return "loss";
    //     }else{
    //         return "draw";
    //     }
    // }

    toString() {
        return `${this.soldierCount} ${this.unitClass}`;
    }
}

Platoon.ADVANTAGE_MAP = advantageMap

module.exports = Platoon