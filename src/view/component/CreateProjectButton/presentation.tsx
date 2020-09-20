import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";

/**
 * Props
 * @interface
 */
interface Props {
  openState: boolean
  closeHandler: () => void
}

/**
 * CreateProjectButtonPresentation
 * @constructor
 */
export const CreateProjectButtonPresentation: FunctionComponent<Props> = (props) => {
  const [open, setOpen] = useState(props.openState);

  const handleClose = (): void => {
    setOpen(false);
    props.closeHandler();
  };

  useEffect(() => {
    setOpen(props.openState)
  }, [props.openState]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth={'lg'}
      disableBackdropClick={true}
      disableEscapeKeyDown={true}
    >
      <DialogTitle id="form-dialog-title">プロジェクト新規作成</DialogTitle>
      <DialogContent>
        <DialogContentText/>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="プロジェクト名"
          type="text"
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};