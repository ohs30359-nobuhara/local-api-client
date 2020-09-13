import React, { FunctionComponent } from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  AppBar,
  Toolbar,
  createStyles,
  Theme,
  Typography,
  Button,
  Menu,
  MenuItem
} from "@material-ui/core";

import {Link} from 'react-router-dom'

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
        color: 'white'
      },
      title: {
        flexGrow: 1,
      },
    }),
  );

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          News
        </Typography>
        <Link to={'/project'}>
          <button>
          Project一覧
          </button>
        </Link>
        <Button  className={classes.menuButton} aria-controls="simple-menu" aria-haspopup="true" color="secondary"  onClick={handleClick}>
          create
        </Button>

        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>project</MenuItem>
          <MenuItem onClick={handleClose}>api</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  )
};