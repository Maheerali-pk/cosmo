import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import Paragraph from "../../../StyledComponents/Paragraph";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import TableRowCollapse from "../../../Components/TableRowCollapse";
import { Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../Components/Tabs";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../Dialogs/NewInvoiceDialog";
import { Stages } from "../../../Components/Stages";
import SelectsRow from "./SelectsRow";
import Grid, { grid } from "../../../StyledComponents/Grid";

import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import CustomSelect from "../../../Components/CustomSelect";
import { useState } from "react";
import CustomInput from "../../../Components/CustomInput";
import CustomDatePicker from "../../../Components/CustomDatePicker";
import CalendarTodayIcon from "@material-ui/icons/CalendarToday";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

import MomentUtils from "@date-io/moment";
const RightSide = () => {
   const [issueDate, setIssueDate] = useState(new Date());
   const [dueDate, setDueDate] = useState(new Date());
   const [deliveryDate, setDeliveryDate] = useState(new Date());
   return (
      <MuiPickersUtilsProvider utils={MomentUtils}>
         <Flexbox column fullWidth>
            <UnderlinedHeading>
               <Text fontFamily="semibold" size={13}>
                  Details
               </Text>
            </UnderlinedHeading>

            <Grid fullWidth noOfColumns={2} gap="2rem">
               <div>
                  <Text color="graySubHeading" size={13}>
                     Reference No.
                  </Text>
                  <Text size={13}>1258000691</Text>
               </div>
               <CustomDatePicker
                  label="Posting Date"
                  inputProps={{ style: { fontSize: toRem(13) } }}
                  onChange={setIssueDate}
                  value={issueDate}
                  keyboardIcon={
                     <CalendarTodayIcon
                        style={{ fontSize: toRem(13), marginBottom: "0.1rem" }}
                        fontSize="small"
                     ></CalendarTodayIcon>
                  }
               ></CustomDatePicker>
            </Grid>
         </Flexbox>
      </MuiPickersUtilsProvider>
   );
};

export interface AccountRecieveablesProps {}

const currencySelectOptions = stringsToOptions(["USD", "Option 2", "Option 3"]);
const accountSelectOptions = stringsToOptions(["Meezan Bank DHA Branch - 1296 2586 7890 83", "Option 2", "Option 3"]);
const termsSelectOptions = stringsToOptions(["LC 30 Days", "Option 2", "Option 3"]);
const shipmentModeSelectOptions = stringsToOptions(["By Courier", "Option 2", "Option 3"]);
const incoTermsSelectOptions = stringsToOptions(["DAP - Delivered at Place", "Option 2", "Option 3"]);
const Content: React.FC<AccountRecieveablesProps> = () => {
   const [currency, setCurrency] = useState(currencySelectOptions[0].value);
   const [account, setAccount] = useState(accountSelectOptions[0].value);
   const [terms, setTerms] = useState(termsSelectOptions[0].value);
   const [shipmentMode, setShipmentMode] = useState(shipmentModeSelectOptions[0].value);
   const [incoTerms, setIncoTerms] = useState(incoTermsSelectOptions[0].value);
   return (
      <Grid padding="2rem" columns="2.5fr 1fr" gap="4rem" fullWidth>
         <Flexbox column fullWidth>
            <UnderlinedHeading justify="space-between">
               <Text fontFamily="semibold" mb={3} size={13}>
                  Billing
               </Text>
               <Text underline size={13}>
                  Additional
               </Text>
            </UnderlinedHeading>
            <Grid fullWidth noOfColumns={3} gap="2rem">
               <CustomSelect
                  fullWidth
                  style={{ fontSize: toRem(13), paddingLeft: "0.25rem" }}
                  label="Account"
                  value={terms}
                  onValueChange={setTerms}
                  options={termsSelectOptions}
               ></CustomSelect>
               <Paragraph>
                  <Text size={13} color="graySubHeading">
                     Currency
                  </Text>
                  <Text size={13} color="graySubHeading">
                     PKR - United States Dollars
                  </Text>
               </Paragraph>
               <Paragraph></Paragraph>
               <Paragraph>
                  <Text size={13} color="graySubHeading">
                     Pay To
                  </Text>
                  <Text size={13} color="graySubHeading">
                     Solicit Pharmaceuticals Limited
                  </Text>
               </Paragraph>
               <Paragraph>
                  <Text size={13} color="graySubHeading">
                     Amount (In Words)
                  </Text>
                  <Text size={13} color="graySubHeading">
                     Fifty-Two Thousand, One Hundred and Fifty Only
                  </Text>
               </Paragraph>
               <Paragraph>
                  <Text size={13} color="graySubHeading">
                     Amount
                  </Text>
                  <Text size={13}>50,000</Text>
               </Paragraph>
            </Grid>
         </Flexbox>
         <RightSide></RightSide>
      </Grid>
   );
};

export default Content;
