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
exports.stabService = exports.StabService = void 0;
const clientResponseVo_1 = require("../domain/vo/clientResponseVo");
const project_1 = require("../infra/sqlite/schema/project");
class StabService {
    exec(request) {
        return __awaiter(this, void 0, void 0, function* () {
            const resources = request.resourcesParams;
            const path = request.requestPath.replace(`/stab/${resources.project}`, "");
            const project = yield project_1.Project.findByName(resources.project);
            if (project == null) {
                return clientResponseVo_1.ClientResponseVo.createError({ message: 'stab is not found' }, {}, 400);
            }
            return clientResponseVo_1.ClientResponseVo.createSuccessful({ pro: resources.project, path: path }, 200);
        });
    }
}
exports.StabService = StabService;
exports.stabService = new StabService();
