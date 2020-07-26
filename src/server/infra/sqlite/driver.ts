import { Database } from 'sqlite3';
import { resolve } from 'path';


class SpliteDriver {
  private readonly driver: Database;

  /**
   * @constructor
   */
  constructor() {
    const path: string = resolve(`${__dirname}/../../../../resource/db.sqlite3`)
    this.driver = new Database(path, (err => {
      if (err) {
        console.log(err);
        throw Error('Connected fail to sqlite3')
      }
      console.log('Connected success to sqlite3');
    }));
  }

  /**
   * insert
   * @param sql
   * @param placeHolder
   */
  public async insert(sql: string, placeHolder: any[] = []): Promise<boolean> {
    return await this.run(sql, placeHolder);
  }

  /**
   * update
   * @param sql
   * @param placeHolder
   */
  public async update(sql: string, placeHolder: any[] = []): Promise<boolean> {
    return await this.run(sql, placeHolder);
  }

  /**
   * selete
   * @param sql
   * @param placeHolder
   */
  public async delete(sql: string, placeHolder: any[] = []): Promise<boolean> {
    return await this.run(sql, placeHolder);
  }

  /**
   * select
   * @param sql
   * @param placeHolder
   */
  public async select<T>(sql: string, placeHolder: any[] = []): Promise<Array<T>> {
    return await this.all(sql, placeHolder);
  }

  /**
   * run
   * @param sql
   * @param placeHolder
   */
  private run(sql: string, placeHolder: any[] = []): Promise<boolean> {
    return new Promise<any>(((resolve, reject) => {
      this.driver.run(sql, placeHolder, (err => {
        reject(false);
        return console.log(err);
      }));

      resolve(true);
    }));
  }

  /**
   * all
   * @param sql
   * @param placeHolder
   */
  private all<T>(sql: string, placeHolder: any[] = []): Promise<Array<T>> {
    return new Promise<any>(((resolve, reject) => {
      this.driver.all(sql, placeHolder, (err, rows) => {
        if(err) {
          reject(err);
          return console.log(err);
        }

        resolve(rows);
      })
    }));
  }
}
export const sqliteDriver: SpliteDriver = new SpliteDriver();