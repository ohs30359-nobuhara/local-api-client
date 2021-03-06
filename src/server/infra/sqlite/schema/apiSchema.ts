import {Schema, SchemaStaticFunction, staticImplements} from "./schema";
import {sqliteDriver} from "../driver";
import {Api} from "../../../../Interface/api";

/**
 * ResponseSchema
 * @class
 */
@staticImplements<SchemaStaticFunction>()
export class ApiSchema extends Schema implements Api {
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

  static async findById(id: number): Promise<ApiSchema| null>{
    let m: ApiSchema | null = null;

    (await sqliteDriver.select('SELECT * FROM ApiSchema WHERE ID = ?', [id])).forEach((record: any) => {
      m = new ApiSchema();
      m.id = record.id;
      m.name = record.name;
      m.method = record.method;
      m.path = record.path;
      m.project_id = record.project_id;
    });

    return m;
  }

  static async findByPath(path: string): Promise<ApiSchema| null>{
    let m: ApiSchema | null = null;

    (await sqliteDriver.select('SELECT * FROM ApiSchema WHERE PATH = ?', [path])).forEach((record: any) => {
      m = new ApiSchema();
      m.id = record.id;
      m.name = record.name;
      m.method = record.method;
      m.path = record.path;
      m.project_id = record.project_id;
    });

    return m;
  }

  static async index(): Promise<Array<ApiSchema>> {
    return (await sqliteDriver.select('SELECT * FROM API')).map((record: any) => {
      const m: ApiSchema = new ApiSchema();
      m.id = record.id;
      m.name = record.name;
      m.method = record.method;
      m.path = record.path;
      m.project_id = record.project_id;
      return m;
    });
  }

  static async findByProject(id: number): Promise<Array<ApiSchema>> {
    return (await sqliteDriver.select('SELECT * FROM API WHERE PROJECT_ID = ?', [id])).map((record: any) => {
      const m: ApiSchema = new ApiSchema();
      m.id = record.id;
      m.name = record.name;
      m.method = record.method;
      m.path = record.path;
      m.project_id = record.project_id;
      return m;
    });
  }
}