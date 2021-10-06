import {
   FormControl,
   InputLabel,
   MenuItem,
   Select as MUISelect,
   SelectProps as MUISelectProps,
} from "@material-ui/core";
export interface SelectOption {
   text: string;
   value: string;
}
export interface SelectProps extends MUISelectProps {
   options: SelectOption[];
   label?: string;
   onValueChange: (option: string) => void;
   value: string;
   wrapperWidth?: string;
}

const CustomSelect: React.FC<SelectProps> = ({ onValueChange, label, options, value, wrapperWidth, ...rest }) => {
   return (
      <FormControl style={{ width: wrapperWidth || "" }}>
         {label && <InputLabel>{label}</InputLabel>}
         <MUISelect
            {...rest}
            disableUnderline
            onChange={(e) => {
               onValueChange(e.target.value as string);
            }}
            value={value}
         >
            {options.map((option) => (
               <MenuItem value={option.value}>{option.text}</MenuItem>
            ))}
         </MUISelect>
      </FormControl>
   );
};

export default CustomSelect;
