"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopPagePresentation = void 0;
const react_1 = __importDefault(require("react"));
const default_1 = require("../template/default");
const presentation_1 = require("../component/createProject/presentation");
exports.TopPagePresentation = (props) => {
    return (react_1.default.createElement(default_1.DefaultTemplatePresentation, null,
        "Home",
        react_1.default.createElement(presentation_1.CreateProjectPresentation, null)));
};
//# sourceMappingURL=top.js.map