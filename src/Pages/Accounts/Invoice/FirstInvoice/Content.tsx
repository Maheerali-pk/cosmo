import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../../StyledComponents/Flexbox";
import Text from "../../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../../Components/PageContentHeader";
import Layout from "../../../../Components/Layout";
import TableRowCollapse from "../../../../Components/TableRowCollapse";
import { Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../../Components/Tabs";
import { useGlobalContext } from "../../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../../Dialogs/NewInvoiceDialog";
import { Stages } from "../../../../Components/Stages";
import SelectsRow from "./SelectsRow";
import Grid, { grid } from "../../../../StyledComponents/Grid";

import UnderlinedHeading from "../../../../StyledComponents/UnderlinedHeading";
import CustomSelect from "../../../../Components/CustomSelect";
import { useState } from "react";
import CustomInput from "../../../../Components/CustomInput";
import CustomDatePicker from "../../../../Components/CustomDatePicker";
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
               <CustomDatePicker
                  label="Issue Date"
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
               <CustomInput label="P.O. #" inputStyles={{ fontSize: toRem(13) }}></CustomInput>
               <CustomDatePicker
                  label="Issue Date"
                  inputProps={{ style: { fontSize: toRem(13) } }}
                  onChange={setDueDate}
                  value={dueDate}
                  keyboardIcon={<></>}
               ></CustomDatePicker>
               <CustomDatePicker
                  label="Delievery Date"
                  inputProps={{ style: { fontSize: toRem(13) } }}
                  onChange={setDeliveryDate}
                  value={deliveryDate}
                  keyboardIcon={<></>}
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
                  label="Currency"
                  value={currency}
                  onValueChange={setCurrency}
                  options={currencySelectOptions}
               ></CustomSelect>
               <CustomSelect
                  fullWidth
                  style={{ fontSize: toRem(13), paddingLeft: "0.25rem" }}
                  label="Currency"
                  value={account}
                  onValueChange={setAccount}
                  options={accountSelectOptions}
               ></CustomSelect>
               <CustomSelect
                  fullWidth
                  style={{ fontSize: toRem(13), paddingLeft: "0.25rem" }}
                  label="Payment Terms"
                  value={terms}
                  onValueChange={setTerms}
                  options={termsSelectOptions}
               ></CustomSelect>
               <CustomSelect
                  fullWidth
                  style={{ fontSize: toRem(13), paddingLeft: "0.25rem" }}
                  label="Shipment Mode"
                  value={shipmentMode}
                  onValueChange={setShipmentMode}
                  options={shipmentModeSelectOptions}
               ></CustomSelect>
               <CustomSelect
                  fullWidth
                  style={{ fontSize: toRem(13), paddingLeft: "0.25rem" }}
                  label="INCO Terms"
                  value={incoTerms}
                  onValueChange={setIncoTerms}
                  options={incoTermsSelectOptions}
               ></CustomSelect>
               <CustomInput label="Destination" inputStyles={{ fontSize: toRem(13) }}></CustomInput>
            </Grid>
         </Flexbox>
         <RightSide></RightSide>
      </Grid>
   );
};

export default Content;
