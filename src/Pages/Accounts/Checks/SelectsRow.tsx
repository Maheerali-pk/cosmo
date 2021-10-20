import { duration, Icon, MenuItem, makeStyles, createTheme, Button, IconButton } from "@material-ui/core";
import CustomSelect, { SelectOption } from "../../../Components/CustomSelect";
import { colors, stringsToOptions, toRem } from "../../../Helpers/utils";
import useSelect from "../../../Hooks/useSelect";
import Flexbox from "../../../StyledComponents/Flexbox";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useDatePicker from "../../../Hooks/useDatePicker";
import Text from "../../../StyledComponents/Text";
import CustomDatePicker from "../../../Components/CustomDatePicker";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import styled from "styled-components";
import { ColorLens } from "@material-ui/icons";
export interface SelectsRowProps {}

const Wrapper = styled(Flexbox)`
   border-bottom: 2px solid ${colors.tableFooterHrColor};
`;

const statusSelectOptions = stringsToOptions(["New", "Option 2", "Option 3"]);
const modeSelectOptions = stringsToOptions(["Mode 1", "Option 2", "Option 3"]);
const branchSelectOptions = stringsToOptions(["DHA Branch", "All Branches", "Some branches", "No branches"]);

const SelectsRow: React.FC<SelectsRowProps> = () => {
   const [status, setStatus] = useSelect(statusSelectOptions[0].value);
   const [mode, onModeChange] = useSelect(modeSelectOptions[0].value);
   const [branch, onBranchChange] = useSelect(branchSelectOptions[0].value);

   return (
      <Wrapper padding="0.75rem 1rem 0.75rem 2rem" justify="space-between" fullWidth>
         <Flexbox justify="space-between" mr={48} fullWidth>
            <Flexbox gap={16} mr={16}>
               <Text size={13} color="graySubHeading">
                  Type
               </Text>
               <Text size={13} color="graySubHeading">
                  Supplier
               </Text>
            </Flexbox>
            <Flexbox gap={16}>
               <Text size={13} color="graySubHeading">
                  Status
               </Text>
               <Text size={13}>In Progress</Text>
            </Flexbox>
            <Flexbox gap={16}>
               <Text size={13} color="graySubHeading">
                  Branch
               </Text>
               <Text size={13}>DHA Branch</Text>
            </Flexbox>

            <Flexbox>
               <CheckCircleOutlineIcon
                  fontSize="small"
                  style={{ color: colors.graySubHeading }}
               ></CheckCircleOutlineIcon>
               <Text size={13} ml={12} color="graySubHeading">
                  Approvals
               </Text>
            </Flexbox>
         </Flexbox>
         <Flexbox gap={24}>
            <Text style={{ whiteSpace: "nowrap" }} size={13}>
               Updated by Mishal Sikander Yesterday
            </Text>
            <Flexbox gap={8}>
               <IconButton style={{ padding: 0 }}>
                  <AttachFileIcon fontSize="small"></AttachFileIcon>
               </IconButton>
               <IconButton style={{ padding: 0 }}>
                  <HistoryIcon fontSize="small"></HistoryIcon>
               </IconButton>
               <IconButton style={{ padding: 0 }}>
                  <MoreHorizIcon fontSize="small"></MoreHorizIcon>
               </IconButton>
            </Flexbox>
         </Flexbox>
      </Wrapper>
   );
};

export default SelectsRow;
