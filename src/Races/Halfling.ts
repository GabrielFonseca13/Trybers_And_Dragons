import Race from './Race';

const HALFLING_MAX_LIFE_POINTS = 60;

class Halfling extends Race {
  private _maxLifePoints: number;
  private static _halflings = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = HALFLING_MAX_LIFE_POINTS;
    Halfling._halflings += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._halflings;
  }
}

export default Halfling;