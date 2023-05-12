import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType: EnergyType;
  private static _rangers = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._rangers += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._rangers;
  }
}

export default Ranger;