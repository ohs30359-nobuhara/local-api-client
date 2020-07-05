"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateApiButtonPresentation = void 0;
const react_1 = __importStar(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const presentation_1 = require("../ApiStatus/presentation");
const presentation_2 = require("../SelectBox/presentation");
exports.CreateApiButtonPresentation = () => {
    const [open, setOpen] = react_1.useState(false);
    const handleWindowOpen = () => {
        setOpen(true);
    };
    const handleWindowClose = () => {
        setOpen(false);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(core_1.IconButton, { onClick: handleWindowOpen },
            react_1.default.createElement(icons_1.PlaylistAdd, null)),
        react_1.default.createElement(core_1.Dialog, { open: open, onClose: handleWindowClose, "aria-labelledby": "form-dialog-title", fullWidth: true, maxWidth: 'lg' },
            react_1.default.createElement(core_1.DialogTitle, { id: "form-dialog-title" }, "API\u65B0\u898F\u4F5C\u6210"),
            react_1.default.createElement(core_1.DialogContent, null,
                react_1.default.createElement(core_1.DialogContentText, null),
                react_1.default.createElement(core_1.TextField, { autoFocus: true, margin: "dense", id: "name", label: "API", type: "text", fullWidth: true }),
                react_1.default.createElement(presentation_2.SelectBoxPresentation, { options: [] })),
            react_1.default.createElement(core_1.DialogActions, null,
                react_1.default.createElement(core_1.Button, { onClick: handleWindowClose, color: "primary" }, "Cancel"),
                react_1.default.createElement(core_1.Button, { onClick: handleWindowClose, color: "primary" }, "Create"))),
        react_1.default.createElement(presentation_1.ApiStatusPresentation, null)));
};
//# sourceMappingURL=presentation.js.map