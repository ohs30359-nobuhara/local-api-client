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
  public response: string | null = null;
  public api_id: number | null = null;

  async create(): Promise<boolean> {
    return await sqliteDriver.insert('INSERT INTO RESPONSE (LABEL, STATUS, CONTENT_TYPE, RESPONSE, API_ID) VALUES  (?)', [this.label, this.status, this.contentType, this.response, this.api_id]);
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
      m.response = record.response;
      m.api_id = record.api_id;
    });

    return m;
  }

  static async index(): Promise<Array<Response>> {
    return (await sqliteDriver.select('SELECT * FROM API')).map((record: any) => {
      const m: Response = new Response();
      m.id = record.id;
      m.label = record.label;
      m.status = record.status;
      m.contentType = record.content_type;
      m.response = record.response;
      m.api_id = record.api_id;
      return m;
    });
  }

  static async findByApi(apiId: number): Promise<Array<Response>> {
    return (await sqliteDriver.select('SELECT * FROM response WHERE api_id = ?', [apiId])).map((record: any) => {
      const m: Response = new Response();
      m.id = record.id;
      m.label = record.label;
      m.status = record.status;
      m.contentType = record.content_type;
      m.response = record.response;
      m.api_id = record.api_id;
      return m;
    });
  }

  static async findByRequestPath(projectName: string, apiPath: string): Promise<Response | null> {
    const sql: string = `SELECT response.response, response.status, response.content_type FROM response INNER JOIN api ON api.id = response.api_id INNER JOIN project ON project.id = api.project_id WHERE project.name = ? AND api.path = ?;`;
    let m: Response | null = null;

   (await sqliteDriver.select(sql, [projectName, apiPath])).map((record: any) => {
      m = new Response();
      m.status = record.status;
      m.contentType = record.content_type;
      m.response = record.response;
    });

    return m;
  }
}