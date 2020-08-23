import React, { FunctionComponent, useState } from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  TextField,
} from "@material-ui/core";
import {Add} from '@material-ui/icons';
import {ApiStatusPresentation} from "../ApiStatus/presentation";

/**
 * CreateProjectButtonPresentation
 * @constructor
 */
export const CreateProjectButtonPresentation: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        color="primary"
        endIcon={<Add/>}
        onClick={handleOpen}
      >Create New Project</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={'lg'}
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

      <ApiStatusPresentation/>
    </div>
  );
};