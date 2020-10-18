import React, {FunctionComponent, useState} from 'react';
import {
  Button, createStyles,
  TextField, Theme,
} from "@material-ui/core";
import {Project} from "@interface/project";
import makeStyles from "@material-ui/core/styles/makeStyles";

/**
 * Props
 * @interface
 */
interface Props {
  handleCreate: (project: Project) => void
  handleUpdate: (project: Project) => void
  project?: Project
}

/**
 * ProjectEditorPresentation
 * @constructor
 */
export const ProjectEditorPresentation: FunctionComponent<Props> = (props) => {
  const [project, setProject] = useState<Project>(props.project || {name: '', id: null});

  const useStyles = makeStyles((theme: Theme) =>
    createStyles({
      button: {
        marginTop: "30px",
        width: "100%"
      }
    }),
  );

  const classes = useStyles();

  return (
    <div>
      <TextField
        autoFocus
        margin="dense"
        label="プロジェクト名"
        type="text"
        fullWidth
        value={project.name}
        onChange={e => { setProject({...project, name: e.target.value})  }}
      />

      {
        (() => {
          if (project.id == null) {
            return (
              <Button variant="contained" color="primary" className={classes.button} onClick={ () => {
                props.handleCreate(project);
              }}> create project</Button>
            )
          } else {
            return (
              <Button variant="contained" color="primary" className={classes.button} onClick={ () => {
                props.handleUpdate(project);
              }}> update project</Button>
            )
          }
        })()
      }
    </div>
  );
};