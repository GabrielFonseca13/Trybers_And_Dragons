import Race from './Race';

const DWARF_MAX_LIFE_POINTS = 80;

class Dwarf extends Race {
  private _maxLifePoints: number;
  private static _dwarfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = DWARF_MAX_LIFE_POINTS;
    Dwarf._dwarfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._dwarfs;
  }
}

export default Dwarf;
