import { duration, Icon, MenuItem, makeStyles, createTheme } from "@material-ui/core";
import CustomSelect, { SelectOption } from "../../Components/CustomSelect";
import { colors, stringsToOptions, toRem } from "../../Helpers/utils";
import useSelect from "../../Hooks/useSelect";
import Flexbox from "../../StyledComponents/Flexbox";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useDatePicker from "../../Hooks/useDatePicker";
import Text from "../../StyledComponents/Text";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import CustomDatePicker from "../../Components/CustomDatePicker";

export interface SelectsRowProps {}
const customersSelectOptions = stringsToOptions(["All Customers", "Some Customers", "No Customers"]);
const durationSelectOptions = stringsToOptions(["This Annual Year To Date", "Option 2", "Option 3"]);
const branchSelectOptions = stringsToOptions(["All Branches", "Some branches", "No branches"]);

const SelectsRow: React.FC<SelectsRowProps> = () => {
   const [customer, onCustomerChange] = useSelect(customersSelectOptions[0].value);
   const [duration, onDurationChange] = useSelect(durationSelectOptions[0].value);
   const [branch, onBranchChange] = useSelect(branchSelectOptions[0].value);

   const [fromDate, onChangeFromDate] = useDatePicker(new Date());
   const [toDate, onChangeToDate] = useDatePicker(new Date());

   return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
         <Flexbox padding="0.75rem 2.5rem 0.75rem 2.5rem" justify="space-between" fullWidth>
            <CustomSelect
               value={customer}
               onValueChange={onCustomerChange}
               label="Customer"
               options={customersSelectOptions}
            ></CustomSelect>
            <Flexbox gap={16}>
               <CustomSelect
                  value={duration}
                  onValueChange={onDurationChange}
                  label="Duration"
                  options={durationSelectOptions}
               ></CustomSelect>
               <CustomDatePicker onChange={onChangeFromDate} value={fromDate}></CustomDatePicker>
               <CustomDatePicker onChange={onChangeToDate} value={toDate}></CustomDatePicker>
            </Flexbox>
            <Flexbox justify="space-between" gap={32}>
               <CustomSelect
                  value={branch}
                  onValueChange={onBranchChange}
                  label="Branch"
                  options={branchSelectOptions}
               ></CustomSelect>
               <Text color="bueLink">Advanced</Text>
            </Flexbox>
         </Flexbox>
      </MuiPickersUtilsProvider>
   );
};

export default SelectsRow;
