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
exports.apiRepository = void 0;
const api_1 = require("../sqlite/schema/api");
class ApiRepository {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return api_1.Api.index();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield api_1.Api.findById(id);
        });
    }
    create(name, method, path, projectId) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = new api_1.Api();
            a.name = name;
            a.method = method;
            a.path = path;
            a.project_id = projectId;
            return yield a.create();
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield api_1.Api.findById(id);
            if (a == null) {
                return false;
            }
            return yield a.destroy();
        });
    }
    update(id, name, method, path) {
        return __awaiter(this, void 0, void 0, function* () {
            const a = yield api_1.Api.findById(id);
            if (a == null) {
                return false;
            }
            a.name = name;
            a.method = method;
            a.path = path;
            return yield a.update();
        });
    }
}
exports.apiRepository = new ApiRepository();
