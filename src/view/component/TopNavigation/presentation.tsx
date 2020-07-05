import React, { FunctionComponent } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  AppBar,
  Toolbar,
  createStyles,
  Theme,
  Typography,
  Button
} from "@material-ui/core";

export interface TopNavigationProps {
  drawerWidth: number
}

export const TopNavigationPresentation: FunctionComponent<TopNavigationProps> = (props) => {
  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: `calc(100% - ${props.drawerWidth}px)`,
        marginLeft: props.drawerWidth,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },
    }),
  );

  const classes = useStyles();

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
};