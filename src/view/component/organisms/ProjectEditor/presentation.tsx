import React, {FunctionComponent} from 'react';
import {
  TextField,
} from "@material-ui/core";

/**
 * Props
 * @interface
 */
interface Props {
}

/**
 * ProjectEditorPresentation
 * @constructor
 */
export const ProjectEditorPresentation: FunctionComponent<Props> = (props) => {
  return (
    <TextField
      autoFocus
      margin="dense"
      id="name"
      label="プロジェクト名"
      type="text"
      fullWidth
    />
  );
};