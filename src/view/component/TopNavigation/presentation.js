"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopNavigationPresentation = void 0;
const react_1 = __importDefault(require("react"));
const makeStyles_1 = __importDefault(require("@material-ui/core/styles/makeStyles"));
const core_1 = require("@material-ui/core");
exports.TopNavigationPresentation = (props) => {
    const useStyles = makeStyles_1.default((theme) => core_1.createStyles({
        root: {
            width: `calc(100% - ${props.drawerWidth}px)`,
            marginLeft: props.drawerWidth,
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }));
    const classes = useStyles();
    return (react_1.default.createElement(core_1.AppBar, { position: "fixed", className: classes.root },
        react_1.default.createElement(core_1.Toolbar, null,
            react_1.default.createElement(core_1.Typography, { variant: "h6", className: classes.title }, "News"),
            react_1.default.createElement(core_1.Button, { color: "inherit" }, "Login"))));
};
//# sourceMappingURL=presentation.js.map