"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staticImplements = exports.Schema = void 0;
class Schema {
}
exports.Schema = Schema;
function staticImplements() {
    return (constructor) => { constructor; };
}
exports.staticImplements = staticImplements;
