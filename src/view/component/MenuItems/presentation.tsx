import React, { FunctionComponent } from 'react';
import {
  List,
  createStyles,
  makeStyles,
  Theme,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText, Button
} from "@material-ui/core";
import {MenuItemTypeSelectPresentation} from "../MenuItemTypeSelect/presentation";
import {
  Folder,
  Home,
  CloudCircle, AddCircle
} from '@material-ui/icons';
import {Link} from 'react-router-dom'

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

          <ListItem button component={Link} to={"/project"}>
            <ListItemIcon><Folder/></ListItemIcon>
            <ListItemText primary="Project" />
          </ListItem>

          <ListItem button component={Link} to={"/project"}>
            <ListItemIcon><CloudCircle/></ListItemIcon>
            <ListItemText primary="Api" />
          </ListItem>

        </List>
      <Divider/>
      <List>
        <ListItem>
          <Button
            variant="contained"
            color="primary"
            startIcon={<AddCircle />}
          >
            Create New Api
          </Button>
        </ListItem>
        {list}
      </List>
    </>
  );
};