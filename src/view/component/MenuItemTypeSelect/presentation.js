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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemTypeSelectPresentation = void 0;
const react_1 = __importStar(require("react"));
const makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
const useStyles = makeStyles_1.default((theme) => core_1.createStyles({
    nested: {
        paddingLeft: theme.spacing(4),
    },
}));
exports.MenuItemTypeSelectPresentation = (props) => {
    const classes = useStyles();
    const [open, setOpen] = react_1.useState(false);
    const selectItems = props.selectItems.map(item => {
        return (react_1.default.createElement(core_1.List, { component: "div", disablePadding: true },
            react_1.default.createElement(core_1.ListItem, { button: true, className: classes.nested },
                react_1.default.createElement(core_1.ListItemText, { primary: item.label }))));
    });
    const handleClick = () => {
        setOpen(!open);
    };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.ListItem, { button: true, onClick: handleClick },
            react_1.default.createElement(core_1.ListItemIcon, null, props.iconComponent),
            react_1.default.createElement(core_1.ListItemText, { primary: props.label }),
            open ? react_1.default.createElement(icons_1.ExpandLess, null) : react_1.default.createElement(icons_1.ExpandMore, null)),
        react_1.default.createElement(core_1.Collapse, { in: open, timeout: "auto", unmountOnExit: true }, selectItems)));
};
