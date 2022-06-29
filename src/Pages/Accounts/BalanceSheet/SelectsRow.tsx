import { duration, Icon, MenuItem, makeStyles, createTheme, IconButton } from "@material-ui/core";
import CustomSelect, { SelectOption } from "../../../Components/CustomSelect";
import { colors, getDateString, stringsToOptions, toRem } from "../../../Helpers/utils";
import useSelect from "../../../Hooks/useSelect";
import Flexbox from "../../../StyledComponents/Flexbox";
import { MuiPickersUtilsProvider, KeyboardTimePicker, KeyboardDatePicker, DatePicker } from "@material-ui/pickers";
import MomentUtils from "@date-io/moment";
import useDatePicker from "../../../Hooks/useDatePicker";
import Text from "../../../StyledComponents/Text";
import CustomDatePicker from "../../../Components/CustomDatePicker";
import ButtonPrimary from "../../../StyledComponents/ButtonPrimary";
import { CloudDownloadOutlined, Filter1Outlined, Filter2Outlined } from "@material-ui/icons";

export interface SelectsRowProps {}
const currencySelectOptions = stringsToOptions(["CNY", "USD", "PKR"]);

const SelectsRow: React.FC<SelectsRowProps> = () => {
   const [currency, onCurrencyChange] = useSelect(currencySelectOptions[0].value);
   const [balanceDate, onChangeBalanceDate] = useDatePicker(new Date());

   return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
         <Flexbox padding="0.75rem 2.5rem 0.75rem 2.5rem" gap="2rem" column fullWidth>
            <Flexbox gap="2rem">
               <Flexbox gap="5rem">
                  <CustomDatePicker
                     label="Balance Date"
                     onChange={onChangeBalanceDate}
                     value={balanceDate}
                  ></CustomDatePicker>
                  <CustomSelect
                     style={{ width: "7rem" }}
                     value={currency}
                     onValueChange={onCurrencyChange}
                     label="Currency"
                     options={currencySelectOptions}
                  ></CustomSelect>
               </Flexbox>
               <IconButton>
                  <i className="fas fa-filter fa-xs"></i>
               </IconButton>
               <ButtonPrimary style={{ backgroundColor: colors.blueButton }} variant="contained">
                  <Text color="white">Update</Text>
               </ButtonPrimary>
               <IconButton>
                  <CloudDownloadOutlined></CloudDownloadOutlined>
               </IconButton>
            </Flexbox>
            <Flexbox fullWidth justify="end">
               <Text fontFamily="semibold">As At {getDateString(balanceDate)}</Text>
            </Flexbox>
         </Flexbox>
      </MuiPickersUtilsProvider>
   );
};

export default SelectsRow;
