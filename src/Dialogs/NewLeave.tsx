import {
   createTheme,
   MuiThemeProvider,
   Button,
   makeStyles,
   Radio,
   RadioGroup,
   FormControl,
   FormLabel,
   FormControlLabel,
} from "@material-ui/core";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useState } from "react";
import styled from "styled-components";
import CustomDatePicker from "../Components/CustomDatePicker";
import CustomInput from "../Components/CustomInput";
import CustomSelect from "../Components/CustomSelect";
import Dialog from "../Components/Dialog";
import { colors, commonStyles, fonts, repeat, toRem } from "../Helpers/utils";
import useDatePicker from "../Hooks/useDatePicker";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import Text from "../StyledComponents/Text";
import MomentUtils from "@date-io/moment";

const RowWrapper = styled(Grid)`
   grid-template-columns: ${toRem(100)} auto;
   width: 100%;
   align-items: center;
   row-gap: 0.4rem;
`;
const TableRowWrapper = styled(Grid)`
   grid-template-columns: 1fr 3fr 2fr;
   padding: ${toRem(10)} 1rem;
   width: 100%;
   align-items: center;
   ${Text} {
      font-size: ${toRem(13)};
   }
   & ${Text}:first-child {
      color: ${colors.bueLink} !important;
      text-decoration: underline;
   }
`;
const HeadingsRowWrapper = styled(TableRowWrapper)`
   background: ${colors.headingBackground};
   & ${Text}:first-child {
      color: ${colors.grayText} !important;
      text-decoration: none;
   }
`;
const theme = createTheme({
   overrides: {
      ...commonStyles.overrides,
      MuiSelect: {
         select: {
            width: "100%",
         },
      },
      MuiInputBase: {
         root: {
            fontFamily: fonts.semibold,
            color: colors.grayText,
         },
      },
   },
   palette: {
      ...commonStyles.palette,
   },
});

const tableRows: string[][] = [...repeat(["73450", "Website", "Invoiced"], 2)];
const NewLeaveDialog: React.FC = () => {
   const [toDate, setToDate] = useDatePicker(new Date());
   const [fromDate, setFromDate] = useDatePicker(new Date());
   console.log("hello");
   return (
      <MuiThemeProvider theme={theme}>
         <MuiPickersUtilsProvider utils={MomentUtils}>
            <Dialog title="New Leave" dialogWidth={887}>
               <Grid columns="7rem auto" align="center">
                  <Text color="graySubHeading" size={13}>
                     Employee
                  </Text>
                  <CustomInput inputStyles={{ fontSize: toRem(13) }} placeholder="Jake Holland"></CustomInput>
               </Grid>
               <Grid columns="7rem auto" align="center">
                  <Text color="graySubHeading" size={13}>
                     Type
                  </Text>
                  <CustomInput inputStyles={{ fontSize: toRem(13) }} placeholder="Enter the type"></CustomInput>
               </Grid>
               <Flexbox justify="space-between" fullWidth>
                  <Grid columns="7rem auto" align="center">
                     <Text color="graySubHeading" size={13}>
                        From
                     </Text>
                     <CustomDatePicker
                        label=""
                        value={fromDate}
                        style={{ width: toRem(212) }}
                        InputProps={{ style: { fontSize: toRem(13) }, disableUnderline: true }}
                        onChange={setFromDate}
                     ></CustomDatePicker>
                  </Grid>
                  <Grid columns="7rem auto" align="center">
                     <Text color="graySubHeading" size={13}>
                        To
                     </Text>
                     <CustomDatePicker
                        label=""
                        value={toDate}
                        style={{ width: toRem(212) }}
                        InputProps={{ style: { fontSize: toRem(13) }, disableUnderline: true }}
                        onChange={setToDate}
                     ></CustomDatePicker>
                  </Grid>
               </Flexbox>
               <Grid columns="7rem auto" align="center">
                  <Text color="graySubHeading" size={13}>
                     Backup Person
                  </Text>
                  <CustomInput inputStyles={{ fontSize: toRem(13) }} placeholder="Enter Backup Person"></CustomInput>
               </Grid>
               <Grid columns="7rem auto" align="center">
                  <Text color="graySubHeading" size={13}>
                     Reason
                  </Text>
                  <CustomInput inputStyles={{ fontSize: toRem(13) }} placeholder="Write the reason"></CustomInput>
               </Grid>
            </Dialog>
         </MuiPickersUtilsProvider>
      </MuiThemeProvider>
   );
};
export default NewLeaveDialog;
