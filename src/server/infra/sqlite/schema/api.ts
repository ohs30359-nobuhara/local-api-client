import {Schema, SchemaStaticFunction, staticImplements} from "./schema";
import {sqliteDriver} from "../driver";

/**
 * Response
 * @class
 */
@staticImplements<SchemaStaticFunction>()
export class Api extends Schema {
  public id: number | null = null;
  public name: string | null = null;
  public method: string | null = null;
  public path: string | null = null;
  public project_id: number | null = null;

  async create(): Promise<boolean> {
    return await sqliteDriver.insert('INSERT INTO API (NAME, METHOD, PATH, PROJECT_ID) VALUES  (?)', [this.name]);
  }

  async destroy(): Promise<boolean> {
    return await sqliteDriver.delete('DELETE FROM API WHERE id = (?)', [this.id]);
  }

  async update(): Promise<boolean> {
    return await sqliteDriver.delete('UPDATE PROJECT SET NAME=?, METHOD=?, PATH=?  WHERE ID = ?', [this.name, this.method, this.path, this.id]);
  }

  async validation(): Promise<boolean> {
    return (this.id != null && this.name != null);
  }

  static async findById(id: number): Promise<Api| null>{
    let m: Api | null = null;

    (await sqliteDriver.select('SELECT * FROM Api WHERE ID = ?', [id])).forEach((record: any) => {
      m = new Api();
      m.id = record.id;
      m.name = record.name;
      m.method = record.method;
      m.path = record.path;
      m.project_id = record.project_id;
    });

    return m;
  }

  static async index(): Promise<Array<Api>> {
    return (await sqliteDriver.select('SELECT * FROM API')).map((record: any) => {
      const m: Api = new Api();
      m.id = record.id;
      m.name = record.name;
      m.method = record.method;
      m.path = record.path;
      m.project_id = record.project_id;
      return m;
    });
  }
}