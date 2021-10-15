import { duration, Icon, MenuItem, makeStyles, createTheme } from "@material-ui/core";
import CustomSelect, { SelectOption } from "../../../../Components/CustomSelect";
import { colors, stringsToOptions, toRem } from "../../../../Helpers/utils";
import useSelect from "../../../../Hooks/useSelect";
import Flexbox from "../../../../StyledComponents/Flexbox";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useDatePicker from "../../../../Hooks/useDatePicker";
import Text from "../../../../StyledComponents/Text";
import CustomDatePicker from "../../../../Components/CustomDatePicker";

export interface SelectsRowProps {}
const statusSelectOptions = stringsToOptions(["New", "Option 2", "Option 3"]);
const durationSelectOptions = stringsToOptions(["This Annual Year To Date", "Option 2", "Option 3"]);
const branchSelectOptions = stringsToOptions(["DHA Branch", "All Branches", "Some branches", "No branches"]);

const SelectsRow: React.FC<SelectsRowProps> = () => {
   const [status, setStatus] = useSelect(statusSelectOptions[0].value);
   const [duration, onDurationChange] = useSelect(durationSelectOptions[0].value);
   const [branch, onBranchChange] = useSelect(branchSelectOptions[0].value);

   const [fromDate, onChangeFromDate] = useDatePicker(new Date());
   const [toDate, onChangeToDate] = useDatePicker(new Date());

   return (
      <Flexbox padding="0.75rem 2.5rem 0.75rem 2.5rem" justify="space-between" fullWidth>
         <Flexbox gap={16}>
            <Text size={13} color="graySubHeading">
               Type
            </Text>
            <Text size={13} color="graySubHeading">
               Customer
            </Text>
         </Flexbox>
         <Flexbox gap={16}>
            <Text size={13} color="graySubHeading">
               Status
            </Text>
            <CustomSelect value={status} onValueChange={setStatus} options={statusSelectOptions}></CustomSelect>
         </Flexbox>
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
            <Text isLink>Advanced</Text>
         </Flexbox>
      </Flexbox>
   );
};

export default SelectsRow;
