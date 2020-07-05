"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SelectBoxPresentation = void 0;
const react_1 = __importDefault(require("react"));
const InputLabel_1 = __importDefault(require("@material-ui/core/InputLabel"));
const MenuItem_1 = __importDefault(require("@material-ui/core/MenuItem"));
const FormControl_1 = __importDefault(require("@material-ui/core/FormControl"));
const Select_1 = __importDefault(require("@material-ui/core/Select"));
exports.SelectBoxPresentation = (props) => {
    const [value, setValue] = react_1.default.useState('');
    const [open, setOpen] = react_1.default.useState(false);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
    };
    const selectItems = props.options.map(option => {
        return (react_1.default.createElement(MenuItem_1.default, { value: option.value }, option.label));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(FormControl_1.default, null,
            react_1.default.createElement(InputLabel_1.default, { id: "demo-controlled-open-select-label" }, "Age"),
            react_1.default.createElement(Select_1.default, { labelId: "demo-controlled-open-select-label", id: "demo-controlled-open-select", open: open, onClose: handleClose, onOpen: handleOpen, value: value, onChange: handleChange }, selectItems))));
};
//# sourceMappingURL=presentation.js.map