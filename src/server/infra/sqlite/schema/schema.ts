/**
 * Schema
 * @class
 */
export abstract class Schema {
  public abstract id: number | null;
  abstract async validation(): Promise<boolean>;
  abstract async create(): Promise<boolean>;
  abstract async destroy(): Promise<boolean>;
  abstract async update(): Promise<boolean>;
}

export interface SchemaStaticFunction {
  findById(id :number): Promise<any | null>;
  index(): Promise<Array<any>>;
}

export function staticImplements<T>() {
  return <U extends T>(constructor: U) => {constructor};
}