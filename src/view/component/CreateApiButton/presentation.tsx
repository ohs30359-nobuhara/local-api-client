import React, { FunctionComponent, useState } from 'react';
import {
  Dialog,
  Button,
  DialogActions,
  DialogContentText,
  DialogTitle,
  DialogContent,
  TextField,
  IconButton,
} from "@material-ui/core";
import {PlaylistAdd} from '@material-ui/icons';
import {ApiStatusPresentation} from "../ApiStatus/presentation";
import {SelectBoxPresentation} from "../SelectBox/presentation";

/**
 * CreateApiButtonPresentation
 * @constructor
 */
export const CreateApiButtonPresentation: FunctionComponent = () => {
  const [open, setOpen] = useState(false);

  const handleWindowOpen = (): void => {
    setOpen(true);
  };

  const handleWindowClose = (): void => {
    setOpen(false);
  };

  return (
    <div>
      <IconButton onClick={handleWindowOpen}><PlaylistAdd/></IconButton>
      <Dialog
        open={open}
        onClose={handleWindowClose}
        aria-labelledby="form-dialog-title"
        fullWidth={true}
        maxWidth={'lg'}
      >
        <DialogTitle id="form-dialog-title">API新規作成</DialogTitle>
        <DialogContent>
          <DialogContentText/>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="API"
            type="text"
            fullWidth
          />

          <SelectBoxPresentation options={[]} />
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

      <ApiStatusPresentation/>
    </div>
  );
};