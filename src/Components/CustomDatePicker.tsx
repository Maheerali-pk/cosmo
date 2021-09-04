import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { KeyboardDatePickerProps, KeyboardDatePicker } from "@material-ui/pickers";
import { useState } from "react";
import { toRem } from "../Helpers/utils";

export interface CustomDatePickerProps extends Omit<KeyboardDatePickerProps, "onChange"> {
   onChange: (date: Date) => void;
   value: Date;
}

const CustomDatePicker: React.FC<CustomDatePickerProps> = ({ value, onChange }) => {
   const [open, setOpen] = useState(false);
   return (
      <KeyboardDatePicker
         style={{ width: toRem(113) }}
         variant="inline"
         format="MM/DD/YYYY"
         label="From"
         value={value}
         open={open}
         onClick={() => setOpen(true)}
         onClose={() => setOpen(false)}
         onOpen={() => setOpen(false)}
         onChange={(e) => onChange(e as any as Date)}
         InputProps={{ disableUnderline: true }}
         keyboardIcon={<ArrowDropDown></ArrowDropDown>}
         className="mui-date-picker"
      />
   );
};

export default CustomDatePicker;
