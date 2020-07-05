import React, { FunctionComponent } from 'react';
import {
  List,
  createStyles,
  makeStyles,
  Theme,
  Divider,
  ListSubheader,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import {MenuItemTypeSelectPresentation} from "../MenuItemTypeSelect/presentation";
import {
  Edit
} from '@material-ui/icons';
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
      <MenuItemTypeSelectPresentation/>
    )
  });

  return (
    <>
      <Divider/>
        <List component="nav" className={classes.root}>
          <ListItem button>
            <ListItemIcon><Edit/></ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <MenuItemTypeSelectPresentation/>
        </List>
      <Divider/>
      <List
        component="nav"
        className={classes.root}
        subheader={<ListSubheader component="div" id="nested-list-subheader">Project List</ListSubheader>}
      >
        {list}
      </List>
    </>
  );
};