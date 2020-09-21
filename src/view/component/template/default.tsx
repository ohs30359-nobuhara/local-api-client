import React, { FunctionComponent } from 'react';
import { Typography, Drawer, CssBaseline} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {MenuItemsPresentation} from "../molecules/MenuItems/presentation";
import {TopNavigationPresentation} from "../organisms/TopNavigation/presentation";

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
      <TopNavigationPresentation drawerWidth={drawerWidth} />
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
      </Drawer>
      <main className={classes.content}>
        <Typography paragraph>
          {children}
        </Typography>
      </main>
    </div>
  );
};