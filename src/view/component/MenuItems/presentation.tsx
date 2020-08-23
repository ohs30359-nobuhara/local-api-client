import React, { FunctionComponent } from 'react';
import {
  List,
  createStyles,
  makeStyles,
  Theme,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {MenuItemTypeSelectPresentation} from "../MenuItemTypeSelect/presentation";
import {
  Folder,
  Home,
} from '@material-ui/icons';

/**
 * MenuItemsPresentationProps
 * @interface
 */
export interface MenuItemsPresentationProps {
  menus: Array<{ label: string }>
}

/**
 * useStyles
 */
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

  const selectItems: any = [
    { label: 'Project'},
    { label: 'Api'}
  ];

  const list: JSX.Element[] = props.menus.map(menu => {
    return (
      <MenuItemTypeSelectPresentation
        label={menu.label}
        iconComponent={(<Folder/>)}
        selectItems={selectItems}
      />
    )
  });

  return (
    <>
      <Divider/>
        <List component="nav" className={classes.root}>
          <ListItem button>
            <ListItemIcon><Home/></ListItemIcon>
            <ListItemText primary="TOP" />
          </ListItem>
        </List>
      <Divider/>
      <List> {list} </List>
    </>
  );
};