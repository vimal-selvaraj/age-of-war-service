const Platoon = require("./Platoon.model");

class Army {
    constructor(platoonList = []) {
        if (!Array.isArray(platoonList)) {
            throw new Error("Army must be initialized with an array of platoons");
        }
        this.platoonList = platoonList;
    }

    getPermutations() {
        const permute = (arr) => {
            if (arr.length === 0) return [[]];
            let result = [];
            for (let i = 0; i < arr.length; i++) {
                let current = arr[i];
                let remaining = arr.filter((_, idx) => idx !== i);
                let perms = permute(remaining);
                for (let p of perms) result.push([current, ...p]);
            }
            return result;
        };
        return permute(this.platoonList);
    }

    static fromStringToArmyObjects(str) {
        const platoons = str.split(";").map(p => {
            const [unitClass, count] = p.split("#");
            return new Platoon(unitClass.trim(), Number(count));
        });
        return new Army(platoons);
    }
}

module.exports = Army;
