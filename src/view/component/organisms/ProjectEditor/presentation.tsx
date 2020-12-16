import React, {FunctionComponent, useState} from 'react';
import {
  TextField,
} from "@material-ui/core";
import {Project} from "@interface/project";

/**
 * Props
 * @interface
 */
interface Props {
  handleChange: (project: Project) => void
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
        onChange={e => {
          setProject({...project, name: e.target.value});
          props.handleChange(project);
        }}
      />
    </div>
  );
};