import Race from './Race';

const ELF_MAX_LIFE_POINTS = 99;

class Elf extends Race {
  private _maxLifePoints: number;
  private static _elfs = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = ELF_MAX_LIFE_POINTS;
    Elf._elfs += 1;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  static createdRacesInstances(): number {
    return this._elfs;
  }
}

export default Elf;