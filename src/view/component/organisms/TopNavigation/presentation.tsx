import React, {FunctionComponent, useState} from 'react';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  AppBar,
  Toolbar,
  createStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import {SplitButtonPresentation} from "../../atoms/SplitButton/presentation";
import {ProjectEditorContainer} from "@view/component/organisms/ProjectEditor/container";
import {ApiEditorContainer} from "@view/component/organisms/ApiEditor/container";

export interface TopNavigationProps {
  drawerWidth: number
}

export const TopNavigationPresentation: FunctionComponent<TopNavigationProps> = (props) => {
  const [openProject, setOpenProject] = useState(false);
  const [openApi, setOpenApi] = useState(false);

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      root: {
        width: `calc(100% - ${props.drawerWidth}px)`,
        marginLeft: props.drawerWidth,
      },
      title: {
        flexGrow: 1,
      },
      menuButton: {
        position: 'relative',
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(1),
          width: 'auto',
        },
      }
    }),
  );

  const classes = useStyles();

  return (
    <div>
    <AppBar position="fixed" className={classes.root}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Local Api Client
        </Typography>
        <div className={classes.menuButton}>
          <SplitButtonPresentation options={[
            { name: 'Create New Project', handler: () => setOpenProject(true) },
            {name: 'Create New Api', handler: () => {setOpenApi(true)}},
          ]}/>
        </div>
      </Toolbar>
    </AppBar>
      <ApiEditorContainer open={openApi}/>
      <ProjectEditorContainer open={openProject} />
    </div>
  )
};