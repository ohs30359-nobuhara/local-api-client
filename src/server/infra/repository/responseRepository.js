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
exports.responseRepository = void 0;
const response_1 = require("../sqlite/schema/response");
class ResponseRepository {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return response_1.Response.index();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield response_1.Response.findById(id);
        });
    }
    create(label, status, contentType) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = new response_1.Response();
            r.label = label;
            r.status = status;
            r.contentType = contentType;
            return yield r.create();
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield response_1.Response.findById(id);
            if (r == null) {
                return false;
            }
            return yield r.destroy();
        });
    }
    update(id, label, status, contentType) {
        return __awaiter(this, void 0, void 0, function* () {
            const r = yield response_1.Response.findById(id);
            if (r == null) {
                return false;
            }
            r.label = label;
            r.status = status;
            r.contentType = contentType;
            return yield r.update();
        });
    }
}
exports.responseRepository = new ResponseRepository();
