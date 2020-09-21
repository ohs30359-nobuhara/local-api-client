import React, { FunctionComponent } from 'react';
import {TextField, createStyles, makeStyles, Theme } from "@material-ui/core";

const contentTypes = [
  {
    value: 'json',
    label: 'application/json',
  },
  {
    value: 'xml',
    label: 'application/xml',
  },
  {
    value: 'text',
    label: 'application/json',
  }
];

const httpActions = [
  {
    value: 'GET',
    label: 'GET',
  },
  {
    value: 'POST',
    label: 'POST',
  },
  {
    value: 'PUT',
    label: 'PUT',
  },
  {
    value: 'DELETE',
    label: 'DELETE',
  }
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);



export const ApiEditorPresentation: FunctionComponent = (props) => {
  const classes = useStyles();
  const [contentType, setContentType] = React.useState('json');
  const [action, setAction] = React.useState('GET');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setContentType(event.target.value);
  };

  const handleChangeAction = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAction(event.target.value);
  };

  return (
    <div>
      <div>
        <TextField
          type="text"
          fullWidth
          className={classes.margin}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          label="Api Path"
          helperText="Please input api path"
        />
      </div>

      <div>
        <TextField
          id="standard-select-currency-native"
          className={classes.margin}
          select
          label="Content-Type select"
          value={contentType}
          variant="outlined"
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select content-type"
        >
          {contentTypes.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          select
          label="Http Method"
          value={action}
          variant="outlined"
          onChange={handleChangeAction}
          className={classes.margin}
          SelectProps={{
            native: true,
          }}
          helperText="Please select http method"
        >
          {httpActions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>

        <TextField
          type="number"
          className={classes.margin}
          InputLabelProps={{
            shrink: true,
          }}
          variant="outlined"
          label="Response Status"
          helperText="Please input response status"
        />
      </div>

      <div>
        <TextField
          fullWidth
          className={classes.margin}
          label="Body"
          multiline
          rows={10}
          defaultValue="Return Body"
          variant="outlined"
        />
      </div>
    </div>
  );
};