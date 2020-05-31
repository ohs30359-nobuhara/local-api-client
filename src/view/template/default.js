"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultTemplatePresentation = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const styles_1 = require("@material-ui/core/styles");
const presentation_1 = require("../component/menuItems/presentation");
exports.DefaultTemplatePresentation = ({ children }) => {
    const drawerWidth = 240;
    const useStyles = styles_1.makeStyles((theme) => ({
        root: {
            display: 'flex',
        },
        appBar: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        drawer: {
            width: drawerWidth,
            flexShrink: 0,
        },
        drawerPaper: {
            width: drawerWidth,
        },
        toolbar: theme.mixins.toolbar,
        content: {
            flexGrow: 1,
            backgroundColor: theme.palette.background.default,
            padding: theme.spacing(3),
        },
    }));
    const classes = useStyles();
    return (react_1.default.createElement("div", { className: classes.root },
        react_1.default.createElement(core_1.CssBaseline, null),
        react_1.default.createElement(core_1.AppBar, { position: "fixed", className: classes.appBar },
            react_1.default.createElement(core_1.Toolbar, null,
                react_1.default.createElement(core_1.Typography, { variant: "h6", noWrap: true }, "Permanent drawer"))),
        react_1.default.createElement(core_1.Drawer, { className: classes.drawer, variant: "permanent", classes: {
                paper: classes.drawerPaper,
            }, anchor: "left" },
            react_1.default.createElement("div", { className: classes.toolbar }),
            react_1.default.createElement(presentation_1.MenuItemsPresentation, { menus: [{ label: 'Inbox' }, { label: 'Mail' }] }),
            react_1.default.createElement(presentation_1.MenuItemsPresentation, { menus: [{ label: 'Trash' }, { label: 'Spam' }] })),
        react_1.default.createElement("main", { className: classes.content },
            react_1.default.createElement(core_1.Typography, { paragraph: true }, children))));
};
//# sourceMappingURL=default.js.map