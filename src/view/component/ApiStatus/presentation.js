"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiStatusPresentation = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const contentTypes = [
    {
        value: 'json',
        label: 'application/json',
    },
    {
        value: 'xml',
        label: 'application/xml',
    },
    {
        value: 'text',
        label: 'application/json',
    }
];
const httpActions = [
    {
        value: 'GET',
        label: 'GET',
    },
    {
        value: 'POST',
        label: 'POST',
    },
    {
        value: 'PUT',
        label: 'PUT',
    },
    {
        value: 'DELETE',
        label: 'DELETE',
    }
];
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    margin: {
        margin: theme.spacing(1),
    },
}));
exports.ApiStatusPresentation = (props) => {
    const classes = useStyles();
    const [contentType, setContentType] = react_1.default.useState('json');
    const [action, setAction] = react_1.default.useState('GET');
    const handleChange = (event) => {
        setContentType(event.target.value);
    };
    const handleChangeAction = (event) => {
        setAction(event.target.value);
    };
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.TextField, { type: "text", fullWidth: true, className: classes.margin, InputLabelProps: {
                    shrink: true,
                }, variant: "outlined", label: "Api Path", helperText: "Please input api path" })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.TextField, { id: "standard-select-currency-native", className: classes.margin, select: true, label: "Content-Type select", value: contentType, variant: "outlined", onChange: handleChange, SelectProps: {
                    native: true,
                }, helperText: "Please select content-type" }, contentTypes.map((option) => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)))),
            react_1.default.createElement(core_1.TextField, { select: true, label: "Http Method", value: action, variant: "outlined", onChange: handleChangeAction, className: classes.margin, SelectProps: {
                    native: true,
                }, helperText: "Please select http method" }, httpActions.map((option) => (react_1.default.createElement("option", { key: option.value, value: option.value }, option.label)))),
            react_1.default.createElement(core_1.TextField, { type: "number", className: classes.margin, InputLabelProps: {
                    shrink: true,
                }, variant: "outlined", label: "Response Status", helperText: "Please input response status" })),
        react_1.default.createElement("div", null,
            react_1.default.createElement(core_1.TextField, { fullWidth: true, className: classes.margin, label: "Body", multiline: true, rows: 10, defaultValue: "Return Body", variant: "outlined" })),
        react_1.default.createElement(core_1.Button, { className: classes.margin, variant: "contained", color: "primary" }, "\u4F5C\u6210")));
};
//# sourceMappingURL=presentation.js.map