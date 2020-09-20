import React, {FunctionComponent, useEffect, useState} from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogTitle,
  DialogContent,
} from "@material-ui/core";
import {ApiStatusPresentation} from "../ApiStatus/presentation";

/**
 * Props
 * @interface
 */
interface Props {
  openState: boolean
  closeHandler: () => void
}

/**
 * CreateApiButtonPresentation
 * @constructor
 */
export const CreateApiButtonPresentation: FunctionComponent<Props> = (props) => {
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
    >
      <DialogTitle id="form-dialog-title">API新規作成</DialogTitle>
      <DialogContent>
        <ApiStatusPresentation/>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleWindowClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleWindowClose} color="primary">
          Create
        </Button>
      </DialogActions>
    </Dialog>
  );
};