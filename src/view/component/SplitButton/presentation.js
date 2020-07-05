"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SplitButtonPresentation = void 0;
const react_1 = __importDefault(require("react"));
const core_1 = require("@material-ui/core");
const icons_1 = require("@material-ui/icons");
exports.SplitButtonPresentation = (props) => {
    const [open, setOpen] = react_1.default.useState(false);
    const anchorRef = react_1.default.useRef(null);
    const [selectedIndex, setSelectedIndex] = react_1.default.useState(1);
    const handleClick = () => {
        console.info(`You clicked ${props.options[selectedIndex]}`);
    };
    const handleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setOpen(false);
    };
    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };
    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    return (react_1.default.createElement(core_1.Grid, { container: true, direction: "column", alignItems: "center" },
        react_1.default.createElement(core_1.Grid, { item: true, xs: 12 },
            react_1.default.createElement(core_1.ButtonGroup, { variant: "contained", color: "primary", ref: anchorRef, "aria-label": "split button" },
                react_1.default.createElement(core_1.Button, { onClick: handleClick }, props.options[selectedIndex]),
                react_1.default.createElement(core_1.Button, { color: "primary", size: "small", "aria-controls": open ? 'split-button-menu' : undefined, "aria-expanded": open ? 'true' : undefined, "aria-label": "select merge strategy", "aria-haspopup": "menu", onClick: handleToggle },
                    react_1.default.createElement(icons_1.ArrowDropDown, null))),
            react_1.default.createElement(core_1.Popper, { open: open, anchorEl: anchorRef.current, role: undefined, transition: true, disablePortal: true }, ({ TransitionProps, placement }) => (react_1.default.createElement(core_1.Grow, Object.assign({}, TransitionProps, { style: {
                    transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom',
                } }),
                react_1.default.createElement(core_1.Paper, null,
                    react_1.default.createElement(core_1.ClickAwayListener, { onClickAway: handleClose },
                        react_1.default.createElement(core_1.MenuList, { id: "split-button-menu" }, props.options.map((option, index) => (react_1.default.createElement(core_1.MenuItem, { key: option, disabled: index === 2, selected: index === selectedIndex, onClick: (event) => handleMenuItemClick(event, index) }, option))))))))))));
};
//# sourceMappingURL=presentation.js.map