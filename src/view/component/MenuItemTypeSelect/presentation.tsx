import React, { FunctionComponent, useState } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Collapse,
  List,
  createStyles,
  Theme,
} from "@material-ui/core";
import {
  ExpandMore,
  ExpandLess,
} from '@material-ui/icons';

interface MenuItemTypeSelectProps {
  iconComponent: JSX.Element,
  label: string,
  selectItems:  Array<{
    label: string,
    iconComponent: JSX.Element
  }>
}


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    nested: {
      paddingLeft: theme.spacing(4),
    },
  }),
);

/**
 * MenuItemTypeSelectPresentation
 * @constructor
 */
export const MenuItemTypeSelectPresentation: FunctionComponent<MenuItemTypeSelectProps> = (props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const selectItems: JSX.Element[] = props.selectItems.map(item => {
    return (
      <List component="div" disablePadding>
        <ListItem button className={classes.nested}>
          <ListItemText primary={item.label} />
        </ListItem>
      </List>
    )
  });

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          {props.iconComponent}
        </ListItemIcon>
        <ListItemText primary={props.label} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {selectItems}
      </Collapse>
    </>
  )
};