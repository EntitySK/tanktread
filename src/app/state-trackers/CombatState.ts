import { Battlefield } from '../classes/Battlefield';
import { Unit } from '../classes/Unit';

export class CombatState {

    constructor(public tank: Unit, public battlefield: Battlefield) {};

    advanceTurn(): void {
        for (let unit of this.battlefield.getAllUnits()) {
            unit.advanceTurn();
        }
    }

}