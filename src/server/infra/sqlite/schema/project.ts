import {Schema, SchemaStaticFunction, staticImplements} from "./schema";
import {sqliteDriver} from "../driver";

/**
 * Response
 * @class
 */
@staticImplements<SchemaStaticFunction>()
export class Project extends Schema {
  public id: number | null = null;
  public name: string | null = null;

  async create(): Promise<boolean> {
    return await sqliteDriver.insert('INSERT INTO PROJECT (NAME) VALUES  (?)', [this.name]);
  }

  async destroy(): Promise<boolean> {
    return await sqliteDriver.delete('DELETE FROM PROJECT WHERE id = (?)', [this.id]);
  }

  async update(): Promise<boolean> {
    return await sqliteDriver.delete('UPDATE PROJECT SET NAME = ? WHERE ID = ?', [this.name, this.id]);
  }

  async validation(): Promise<boolean> {
    return (this.id != null && this.name != null);
  }

  static async findById(id: number): Promise<Project | null>{
    let project: Project | null = null;

    (await sqliteDriver.select('SELECT * FROM PROJECT WHERE ID = ?', [id])).forEach((record: any) => {
      project = new Project();
      project.id = record.id;
      project.name = record.name;
    });

    return project;
  }

  static async index(): Promise<Array<Project>> {
    return (await sqliteDriver.select('SELECT * FROM PROJECT')).map((record: any) => {
      const project: Project = new Project();
      project.id = record.id;
      project.name = record.name;
      return project;
    });
  }
}