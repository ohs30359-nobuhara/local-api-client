import React, {FunctionComponent} from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

/**
 * SelectBoxPresentationProps
 * @interface
 */
export interface SelectBoxPresentationProps {
  options: Array<{ label: string, value: string }>
}

/**
 * SelectBoxPresentation
 * @constructor
 */
export const SelectBoxPresentation: FunctionComponent<SelectBoxPresentationProps> = (props) => {
  const [value, setValue] = React.useState<string | number>('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as number);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const selectItems: JSX.Element[] = props.options.map(option => {
      return (<MenuItem value={option.value}>{option.label}</MenuItem>)
  });

  return (
    <>
      <FormControl>
        <InputLabel id="demo-controlled-open-select-label">Age</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={value}
          onChange={handleChange}
        >
          {selectItems}
        </Select>
      </FormControl>
    </>
  );
}