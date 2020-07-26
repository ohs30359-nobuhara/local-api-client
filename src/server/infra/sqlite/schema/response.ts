import {Schema, SchemaStaticFunction, staticImplements} from "./schema";
import {sqliteDriver} from "../driver";

/**
 * Response
 * @class
 */
@staticImplements<SchemaStaticFunction>()
export class Response extends Schema {
  public id: number | null = null;
  public label: string | null = null;
  public status: number | null = null;
  public contentType: string | null = null;

  async create(): Promise<boolean> {
    return await sqliteDriver.insert('INSERT INTO RESPONSE (LABEL, STATUS, CONTENT_TYPE) VALUES  (?)', [this.label, this.status, this.contentType]);
  }

  async destroy(): Promise<boolean> {
    return await sqliteDriver.delete('DELETE FROM RESPONSE WHERE ID = (?)', [this.id]);
  }

  async update(): Promise<boolean> {
    return await sqliteDriver.delete('UPDATE PROJECT SET NAME=?, METHOD=?, PATH=?  WHERE ID = ?', [this.label, this.status, this.contentType, this.id]);
  }

  async validation(): Promise<boolean> {
    return (this.id != null && this.label != null);
  }

  static async findById(id: number): Promise<Response| null>{
    let m: Response | null = null;

    (await sqliteDriver.select('SELECT * FROM RESPONSE WHERE ID = ?', [id])).forEach((record: any) => {
      m = new Response();
      m.id = record.id;
      m.label = record.label;
      m.status = record.status;
      m.contentType = record.contentType;
    });

    return m;
  }

  static async index(): Promise<Array<Response>> {
    return (await sqliteDriver.select('SELECT * FROM API')).map((record: any) => {
      const m: Response = new Response();
      m.id = record.id;
      m.label = record.label;
      m.status = record.status;
      m.contentType = record.contentType;
      return m;
    });
  }
}