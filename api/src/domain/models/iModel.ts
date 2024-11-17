interface iModel<I> {}

abstract class Model<A> implements iModel<A> {
  static fromMap(map: { [key: string]: any }) {
    throw new Error(`FromMap constructor method not implemented in ${this.name}`);
  }
}
