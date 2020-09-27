import React, {FunctionComponent, useState} from 'react';
import {
  Button,
  TextField,
} from "@material-ui/core";
import {Project} from "@interface/project";

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
          if (project == null) {
            return (
              <Button variant="contained" color="primary" onClick={ () => {
                props.handleCreate(project);
              }}> create project</Button>
            )
          } else {
            return (
              <Button variant="contained" color="primary" onClick={ () => {
                props.handleUpdate(project);
              }}> update project</Button>
            )
          }
        })()
      }
    </div>
  );
};