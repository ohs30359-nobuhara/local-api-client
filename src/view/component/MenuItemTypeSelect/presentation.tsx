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
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import {
  ExpandMore,
  ExpandLess,
  Folder,
  Edit
} from '@material-ui/icons';

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
export const MenuItemTypeSelectPresentation: FunctionComponent = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <Folder/>
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemText primary="Starred" />
            <ListItemSecondaryAction>
              <IconButton><Edit/></IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </Collapse>
    </>
  )
};