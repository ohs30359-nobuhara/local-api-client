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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = void 0;
const fastify_1 = __importDefault(require("fastify"));
const projectRepository_1 = require("./infra/repository/projectRepository");
const clientRequestVo_1 = require("./domain/vo/clientRequestVo");
class Application {
    constructor() {
        this.server = fastify_1.default({});
    }
    use(prefix, router) {
        router.mapper.forEach((val, key) => {
            console.log(key, val);
            this.server[val.action](`${prefix}${key}`, (req, res) => __awaiter(this, void 0, void 0, function* () {
                const responseVo = yield val.callback(clientRequestVo_1.ClientRequestVo.createFromFastify(req));
                res.status(responseVo.status).send(responseVo.response);
            }));
        });
    }
    run() {
        this.server.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send(yield projectRepository_1.projectRepository.index());
        }));
        this.server.listen(3000, '0.0.0.0', () => {
            console.log('server running listen 0.0.0.0:3000');
        });
    }
}
exports.Application = Application;
