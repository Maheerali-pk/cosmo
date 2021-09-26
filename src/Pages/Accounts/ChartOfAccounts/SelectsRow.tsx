import { duration, Icon, MenuItem, makeStyles, createTheme, IconButton } from "@material-ui/core";
import CustomSelect, { SelectOption } from "../../../Components/CustomSelect";
import { colors, stringsToOptions, toRem } from "../../../Helpers/utils";
import useSelect from "../../../Hooks/useSelect";
import Flexbox from "../../../StyledComponents/Flexbox";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useDatePicker from "../../../Hooks/useDatePicker";
import Text from "../../../StyledComponents/Text";
import CustomDatePicker from "../../../Components/CustomDatePicker";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
export interface SelectsRowProps {}
const branchSelectOptions = stringsToOptions(["DHA Branch, Factory", "Option 2", "Option 3"]);

const SelectsRow: React.FC<SelectsRowProps> = () => {
   const [branch, onBranchChange] = useSelect(branchSelectOptions[0].value);

   return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
         <Flexbox padding="0.75rem 0.75rem 0.75rem 2.5rem" justify="space-between" fullWidth>
            <CustomSelect
               value={branch}
               onValueChange={onBranchChange}
               label=""
               options={branchSelectOptions}
            ></CustomSelect>
            <Flexbox gap={24}>
               <IconButton style={{ padding: "0" }}>
                  <i className="fas fa-filter fa-xs"></i>
               </IconButton>
               <IconButton style={{ padding: "0" }}>
                  <SettingsOutlinedIcon></SettingsOutlinedIcon>
               </IconButton>
            </Flexbox>
         </Flexbox>
      </MuiPickersUtilsProvider>
   );
};

export default SelectsRow;
