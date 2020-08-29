import { Battlefield } from './classes/Battlefield';
import { Unit } from './classes/Unit';
import { BattlefieldRegion } from './classes/BattlefieldRegion';
import { Random } from './util/Random';

export namespace Game {

    var battlefield: Battlefield;

    function init(): void {
        const regionNames = ['Plains', 'Island', 'Swamp', 'Mountain', 'Forest'];
        battlefield = new Battlefield([]);
        let tempNum: number = 1;
        for (let name of regionNames) {
            const units: Unit[] = [];
            for (let i = 0; i < 3; i++) {
                units.push(new Unit(`Temp${tempNum}`, 10));
                tempNum++;
            }
            battlefield.regions.push(new BattlefieldRegion(name, units));
        }
        battlefield.regions = Random.shuffle(battlefield.regions);
    }

    export function getBattlefield(): Battlefield {
        return battlefield;
    }

    export function hurtEveryone(): void {
        const b: Battlefield = getBattlefield();
        for (let region of b.regions) {
            for (let unit of region.units) {
                unit.health--;
            }
        }
    }

    export function hurtSomeone(): void {
        const region = Random.fromArray(battlefield.regions);
        const unit = Random.fromArray(region.units);
        unit.health--;
    }

    init();

}