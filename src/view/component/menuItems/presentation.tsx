import React, { FunctionComponent } from 'react';
import {List, createStyles, makeStyles, Theme} from "@material-ui/core";
import {MenuListPresentation} from "../MenuList/presentation";
/**
 * MenuItemsPresentationProps
 * @interface
 */
export interface MenuItemsPresentationProps {
  menus: Array<{ label: string }>
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
  }),
);

/**
 * MenuItemsPresentation
 * @param {MenuItemsPresentationProps} props
 */
export const MenuItemsPresentation: FunctionComponent<MenuItemsPresentationProps> = (props) => {
  const classes = useStyles();

  const list: JSX.Element[] = props.menus.map(menu => {
    return (
      <MenuListPresentation/>
    )
  });

  return (
    <List component="nav" className={classes.root}>{list}</List>
  );
};