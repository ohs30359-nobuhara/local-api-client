"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRequestVo = void 0;
class ClientRequestVo {
    constructor(queryParams, headers, body, resourcesParams, requestPath) {
        this.queryParams = queryParams;
        this.headers = headers;
        this.body = body;
        this.resourcesParams = resourcesParams;
        this.requestPath = requestPath;
    }
    static createFromFastify(req) {
        return new ClientRequestVo(req.query, req.headers, req.body, req.params, (req.raw.url || "").split("?")[0]);
    }
}
exports.ClientRequestVo = ClientRequestVo;
