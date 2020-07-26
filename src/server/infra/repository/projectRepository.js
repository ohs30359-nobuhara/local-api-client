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
exports.projectRepository = void 0;
const project_1 = require("../sqlite/schema/project");
class ProjectRepository {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            return project_1.Project.index();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield project_1.Project.findById(id);
        });
    }
    create(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = new project_1.Project();
            p.name = name;
            return yield p.create();
        });
    }
    destroy(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield project_1.Project.findById(id);
            if (p == null) {
                return false;
            }
            return yield p.destroy();
        });
    }
    update(id, name) {
        return __awaiter(this, void 0, void 0, function* () {
            const p = yield project_1.Project.findById(id);
            if (p == null) {
                return false;
            }
            p.name = name;
            return yield p.update();
        });
    }
}
exports.projectRepository = new ProjectRepository();
