import React, { FunctionComponent } from 'react';
import { AppBar, Toolbar, Typography, Drawer, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItemsPresentation} from "../component/menuItems/presentation";

/**
 * デフォルトテンプレート
 * @param children
 * @constructor
 */
export const DefaultTemplatePresentation: FunctionComponent = ({children}) => {
  // css style
  const drawerWidth = 240;

  const useStyles = makeStyles((theme) => ({
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
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
      padding: theme.spacing(3),
    },
  }));

  const classes: any = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Permanent drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />

        <MenuItemsPresentation menus={ [{label: 'Inbox'}, {label: 'Mail'}] } />
        <MenuItemsPresentation menus={ [{label: 'Trash'}, {label: 'Spam'}] } />
      </Drawer>
      <main className={classes.content}>
        <Typography paragraph>
          {children}
        </Typography>
      </main>
    </div>
  );
};