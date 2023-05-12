import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private _energyType: EnergyType;
  private static _mages = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Mage._mages += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._mages;
  }
}

export default Mage;