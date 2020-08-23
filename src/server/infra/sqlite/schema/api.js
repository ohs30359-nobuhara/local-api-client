"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
exports.Api = void 0;
const schema_1 = require("./schema");
const driver_1 = require("../driver");
let Api = (() => {
    var Api_1;
    let Api = Api_1 = class Api extends schema_1.Schema {
        constructor() {
            super(...arguments);
            this.id = null;
            this.name = null;
            this.method = null;
            this.path = null;
            this.project_id = null;
        }
        create() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield driver_1.sqliteDriver.insert('INSERT INTO API (NAME, METHOD, PATH, PROJECT_ID) VALUES  (?)', [this.name]);
            });
        }
        destroy() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield driver_1.sqliteDriver.delete('DELETE FROM API WHERE id = (?)', [this.id]);
            });
        }
        update() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield driver_1.sqliteDriver.delete('UPDATE PROJECT SET NAME=?, METHOD=?, PATH=?  WHERE ID = ?', [this.name, this.method, this.path, this.id]);
            });
        }
        validation() {
            return __awaiter(this, void 0, void 0, function* () {
                return (this.id != null && this.name != null);
            });
        }
        static findById(id) {
            return __awaiter(this, void 0, void 0, function* () {
                let m = null;
                (yield driver_1.sqliteDriver.select('SELECT * FROM Api WHERE ID = ?', [id])).forEach((record) => {
                    m = new Api_1();
                    m.id = record.id;
                    m.name = record.name;
                    m.method = record.method;
                    m.path = record.path;
                    m.project_id = record.project_id;
                });
                return m;
            });
        }
        static findByPath(path) {
            return __awaiter(this, void 0, void 0, function* () {
                let m = null;
                (yield driver_1.sqliteDriver.select('SELECT * FROM Api WHERE PATH = ?', [path])).forEach((record) => {
                    m = new Api_1();
                    m.id = record.id;
                    m.name = record.name;
                    m.method = record.method;
                    m.path = record.path;
                    m.project_id = record.project_id;
                });
                return m;
            });
        }
        static index() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield driver_1.sqliteDriver.select('SELECT * FROM API')).map((record) => {
                    const m = new Api_1();
                    m.id = record.id;
                    m.name = record.name;
                    m.method = record.method;
                    m.path = record.path;
                    m.project_id = record.project_id;
                    return m;
                });
            });
        }
        static findByProject(id) {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield driver_1.sqliteDriver.select('SELECT * FROM API WHERE PROJECT_ID = ?', [id])).map((record) => {
                    const m = new Api_1();
                    m.id = record.id;
                    m.name = record.name;
                    m.method = record.method;
                    m.path = record.path;
                    m.project_id = record.project_id;
                    return m;
                });
            });
        }
    };
    Api = Api_1 = __decorate([
        schema_1.staticImplements()
    ], Api);
    return Api;
})();
exports.Api = Api;
