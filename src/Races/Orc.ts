import Race from './Race';

const ORC_MAX_LIFE_POINTS = 74;

class Orc extends Race {
  private _maxLifePoints: number;
  private static _orcs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = ORC_MAX_LIFE_POINTS;
    Orc._orcs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._orcs;
  }
}

export default Orc;