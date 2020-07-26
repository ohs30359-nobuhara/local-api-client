"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientResponseVo = void 0;
class ClientResponseVo {
    constructor(status, response, headers) {
        this.status = status;
        this.response = response;
        this.headers = headers.getHeader();
    }
    static createSuccessful(response, headers) {
        return new ClientResponseVo(200, response, headers);
    }
}
exports.ClientResponseVo = ClientResponseVo;
