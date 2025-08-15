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

    getStrength(otherPlatoon,advantageMap={}){
        return this.soldierCount * (this.hasAdvantageOverOtherPlatoons(otherPlatoon,advantageMap) ? 2 : 1)
    }

    outcomeAgainstOtherPlatoon(otherPlatoon,advantageMap){
        const myStrength = this.getStrength(otherPlatoon,advantageMap);
        const opponentStrength = otherPlatoon.soldierCount;

        if(myStrength>opponentStrength){
            return "win";
        }else if(myStrength<opponentStrength){
            return "loss";
        }else{
            return "draw";
        }
    }

    toString() {
        return `${this.soldierCount} ${this.unitClass}`;
    }
}

Platoon.ADVANTAGE_MAP = advantageMap

module.exports = Platoon