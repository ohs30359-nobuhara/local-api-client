"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sqliteDriver = void 0;
const sqlite3_1 = require("sqlite3");
const path_1 = require("path");
class SpliteDriver {
    constructor() {
        const path = path_1.resolve(`${__dirname}/../../../../resource/db.sqlite3`);
        this.driver = new sqlite3_1.Database(path, (err => {
            if (err) {
                console.log(err);
                throw Error('Connected fail to sqlite3');
            }
            console.log('Connected success to sqlite3');
        }));
    }
    insert(sql, placeHolder = []) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.run(sql, placeHolder);
        });
    }
    update(sql, placeHolder = []) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.run(sql, placeHolder);
        });
    }
    delete(sql, placeHolder = []) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.run(sql, placeHolder);
        });
    }
    select(sql, placeHolder = []) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.all(sql, placeHolder);
        });
    }
    run(sql, placeHolder = []) {
        return new Promise(((resolve, reject) => {
            this.driver.run(sql, placeHolder, (err => {
                reject(false);
                return console.log(err);
            }));
            resolve(true);
        }));
    }
    all(sql, placeHolder = []) {
        return new Promise(((resolve, reject) => {
            this.driver.all(sql, placeHolder, (err, rows) => {
                if (err) {
                    reject(err);
                    return console.log(err);
                }
                resolve(rows);
            });
        }));
    }
}
exports.sqliteDriver = new SpliteDriver();
