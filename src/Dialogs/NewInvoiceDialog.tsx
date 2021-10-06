import { createTheme, MuiThemeProvider, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import CustomInput from "../Components/CustomInput";
import CustomSelect from "../Components/CustomSelect";
import Dialog from "../Components/Dialog";
import { colors, commonStyles, fonts, repeat, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import Text from "../StyledComponents/Text";

const RowWrapper = styled(Grid)`
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

const HeadingsRowWrapper = styled(RowWrapper)`
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

const NewInvoiceDialog: React.FC = () => {
   const [team, setTeam] = useState("Accounts");
   const [customer, setCustomer] = useState("Twin Food Stores");
   console.log("hello");
   return (
      <MuiThemeProvider theme={theme}>
         <Dialog dialogWidth={887} title="New Invoice">
            <Text mb={12} size={13}>
               Kindly select a Customer for whom you'd like to create the invoice
            </Text>
            <Flexbox mb={20} gap={32} fullWidth>
               <Text size={13} color="graySubHeading">
                  Customer
               </Text>
               <CustomSelect
                  wrapperWidth="100%"
                  fullWidth
                  options={[
                     { text: "Twin Food Stores", value: "Twin Food Stores" },
                     { text: "Item 2", value: "Item 2" },
                     { text: "Item 3", value: "Item 3" },
                  ]}
                  value={customer}
                  onValueChange={(x) => setCustomer(x)}
               ></CustomSelect>
               {/* <Text size={13}>Twin Food Stores</Text> */}
            </Flexbox>
            <Text mb={16} size={13}>
               Ongoing Sales for the following Customer
            </Text>

            <Flexbox mb={60} fullWidth column>
               <HeadingsRowWrapper>
                  <Text>ID</Text>
                  <Text>Title</Text>
                  <Text>Status</Text>
               </HeadingsRowWrapper>
               {tableRows.map((x) => (
                  <RowWrapper>
                     <Text isLink>{x[0]}</Text>
                     <Text>{x[1]}</Text>
                     <Text>{x[2]}</Text>
                  </RowWrapper>
               ))}
            </Flexbox>
            <Flexbox fullWidth>
               <Button style={{ padding: "0.25rem 4rem" }} variant="contained" color="secondary">
                  <Text color="white">+ Create New Sale</Text>
               </Button>
            </Flexbox>
         </Dialog>
      </MuiThemeProvider>
   );
};
export default NewInvoiceDialog;
