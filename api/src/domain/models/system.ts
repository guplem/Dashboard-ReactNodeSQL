export class System extends Model<System> {
  constructor(public id: number, public name: string) {
    super();
  }

  static fromMap(map: { [key: string]: any }): System {
    return new System(map.id, map.name);
  }
}
