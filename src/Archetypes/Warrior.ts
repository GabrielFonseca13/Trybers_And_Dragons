import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType: EnergyType;
  private static _warriors = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._warriors += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._warriors;
  }
}

export default Warrior;