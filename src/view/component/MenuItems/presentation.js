"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuItemsPresentation = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const presentation_1 = require("../MenuItemTypeSelect/presentation");
const icons_1 = require("@material-ui/icons");
const useStyles = core_1.makeStyles((theme) => core_1.createStyles({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
exports.MenuItemsPresentation = (props) => {
    const classes = useStyles();
    const list = props.menus.map(menu => {
        return (react_1.default.createElement(presentation_1.MenuItemTypeSelectPresentation, null));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.List, { component: "nav", className: classes.root },
            react_1.default.createElement(core_1.ListItem, { button: true },
                react_1.default.createElement(core_1.ListItemIcon, null,
                    react_1.default.createElement(icons_1.Edit, null)),
                react_1.default.createElement(core_1.ListItemText, { primary: "Inbox" })),
            react_1.default.createElement(presentation_1.MenuItemTypeSelectPresentation, null)),
        react_1.default.createElement(core_1.Divider, null),
        react_1.default.createElement(core_1.List, { component: "nav", className: classes.root, subheader: react_1.default.createElement(core_1.ListSubheader, { component: "div", id: "nested-list-subheader" }, "Project List") }, list)));
};
//# sourceMappingURL=presentation.js.map