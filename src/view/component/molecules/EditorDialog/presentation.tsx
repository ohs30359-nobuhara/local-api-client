import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";

/**
 * Props
 * @interface
 */
interface Props {
  openState: boolean
  closeHandler: () => void
  submitHandler: () => void
}

/**
 * EditorDialogPresentation
 * @constructor
 */
export const EditorDialogPresentation: FunctionComponent<Props> = (props) => {
  const [open, setOpen] = useState(props.openState);
  const handleWindowClose = (): void => {
    setOpen(false);
    props.closeHandler();
  };

  useEffect(() => {
    setOpen(props.openState)
  }, [props.openState]);

  return (
    <Dialog
      open={open}
      onClose={handleWindowClose}
      aria-labelledby="form-dialog-title"
      fullWidth={true}
      maxWidth={'lg'}
      disableEscapeKeyDown={true}
      disableBackdropClick={true}
    >
      <DialogTitle id="form-dialog-title">API新規作成</DialogTitle>
      <DialogContent>
        {props.children}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleWindowClose} color="primary">
          Cancel
        </Button>
        <Button onClick={() => {
          props.submitHandler();
        }} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};