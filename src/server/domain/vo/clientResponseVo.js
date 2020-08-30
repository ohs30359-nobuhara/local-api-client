"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientResponseVo = void 0;
class ClientResponseVo {
    constructor(status, response, headers) {
        this.status = status;
        this.response = response;
        this.headers = headers;
    }
    static createSuccessful(response, headers = {}) {
        return new ClientResponseVo(200, response, headers);
    }
    static createError(response, headers, status) {
        return new ClientResponseVo(status, response, headers);
    }
}
exports.ClientResponseVo = ClientResponseVo;
