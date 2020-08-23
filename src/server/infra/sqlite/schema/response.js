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
exports.Response = void 0;
const schema_1 = require("./schema");
const driver_1 = require("../driver");
let Response = (() => {
    var Response_1;
    let Response = Response_1 = class Response extends schema_1.Schema {
        constructor() {
            super(...arguments);
            this.id = null;
            this.label = null;
            this.status = null;
            this.contentType = null;
            this.response = null;
            this.api_id = null;
        }
        create() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield driver_1.sqliteDriver.insert('INSERT INTO RESPONSE (LABEL, STATUS, CONTENT_TYPE, RESPONSE, API_ID) VALUES  (?)', [this.label, this.status, this.contentType, this.response, this.api_id]);
            });
        }
        destroy() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield driver_1.sqliteDriver.delete('DELETE FROM RESPONSE WHERE ID = (?)', [this.id]);
            });
        }
        update() {
            return __awaiter(this, void 0, void 0, function* () {
                return yield driver_1.sqliteDriver.delete('UPDATE PROJECT SET NAME=?, METHOD=?, PATH=?  WHERE ID = ?', [this.label, this.status, this.contentType, this.id]);
            });
        }
        validation() {
            return __awaiter(this, void 0, void 0, function* () {
                return (this.id != null && this.label != null);
            });
        }
        static findById(id) {
            return __awaiter(this, void 0, void 0, function* () {
                let m = null;
                (yield driver_1.sqliteDriver.select('SELECT * FROM RESPONSE WHERE ID = ?', [id])).forEach((record) => {
                    m = new Response_1();
                    m.id = record.id;
                    m.label = record.label;
                    m.status = record.status;
                    m.contentType = record.contentType;
                    m.response = record.response;
                    m.api_id = record.api_id;
                });
                return m;
            });
        }
        static index() {
            return __awaiter(this, void 0, void 0, function* () {
                return (yield driver_1.sqliteDriver.select('SELECT * FROM API')).map((record) => {
                    const m = new Response_1();
                    m.id = record.id;
                    m.label = record.label;
                    m.status = record.status;
                    m.contentType = record.content_type;
                    m.response = record.response;
                    m.api_id = record.api_id;
                    return m;
                });
            });
        }
        static findByRequestPath(projectName, apiPath) {
            return __awaiter(this, void 0, void 0, function* () {
                const sql = `SELECT response.response, response.status, response.content_type FROM response INNER JOIN api ON api.id = response.api_id INNER JOIN project ON project.id = api.project_id WHERE project.name = ? AND api.path = ?;`;
                return (yield driver_1.sqliteDriver.select(sql, [projectName, apiPath])).map((record) => {
                    const m = new Response_1();
                    m.status = record.status;
                    m.contentType = record.content_type;
                    m.response = record.response;
                    return m;
                });
            });
        }
    };
    Response = Response_1 = __decorate([
        schema_1.staticImplements()
    ], Response);
    return Response;
})();
exports.Response = Response;
