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
const DuplicateInvoice: React.FC = () => {
   const [team, setTeam] = useState("Accounts");
   const [selectValue, setSelectValue] = useState("Twin Food Stores");
   console.log("hello");
   return (
      <MuiThemeProvider theme={theme}>
         <Dialog title="Duplicate Invoice" dialogWidth={887}>
            <Flexbox fullWidth column mb={32}>
               <FormControl component="fieldset" className="radio-group">
                  <FormLabel component="legend">
                     <Text size={13} mb={16}>
                        Count of Duplicates
                     </Text>
                  </FormLabel>
                  <RadioGroup
                     style={{ display: "grid", gap: toRem(300), gridAutoFlow: "column", paddingLeft: "3rem" }}
                     row
                     aria-label="gender"
                     className="radio-group"
                     name="row-radio-buttons-group"
                  >
                     <FormControlLabel
                        style={{ fontSize: toRem(13) }}
                        value="single"
                        control={<Radio />}
                        label="Single"
                     />
                     <FormControlLabel value="multiple" control={<Radio />} label="Mutiple" />
                  </RadioGroup>
               </FormControl>
            </Flexbox>

            <Flexbox fullWidth column mb={20}>
               <FormControl component="fieldset" className="radio-group" style={{ width: "100%" }}>
                  <FormLabel component="legend">
                     <Text size={13} mb={16}>
                        Create Duplicate for
                     </Text>
                  </FormLabel>
                  <RadioGroup
                     style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 2fr",
                        alignItems: "center",
                        paddingLeft: "3rem",
                        width: "100%",
                     }}
                     row
                     aria-label="gender"
                     className="radio-group"
                     name="row-radio-buttons-group"
                  >
                     <FormControlLabel value="Same Sale" control={<Radio />} label="Same Sale" />
                     <Text size={13}>1251 - Twin Food Stores</Text>
                     <FormControlLabel value="Different Sale" control={<Radio />} label="Different Sale" />
                     <CustomSelect
                        fullWidth
                        style={{ fontSize: toRem(13) }}
                        options={[
                           { text: "Twin Food Stores", value: "Twin Food Stores" },
                           { text: "Option 2", value: "Option 2" },
                        ]}
                        value={selectValue}
                        onValueChange={setSelectValue}
                     ></CustomSelect>
                  </RadioGroup>
               </FormControl>
            </Flexbox>

            <Text mb={16} size={13}>
               Ongoing Sales for the following Customer
            </Text>

            <Flexbox mb={32} fullWidth column>
               <HeadingsRowWrapper>
                  <Text>ID</Text>
                  <Text>Title</Text>
                  <Text>Status</Text>
               </HeadingsRowWrapper>
               {tableRows.map((x) => (
                  <TableRowWrapper>
                     <Text isLink>{x[0]}</Text>
                     <Text>{x[1]}</Text>
                     <Text>{x[2]}</Text>
                  </TableRowWrapper>
               ))}
            </Flexbox>

            <Flexbox fullWidth>
               <Button style={{ padding: "0.25rem 4rem" }} variant="contained" color="secondary">
                  <Text color="white">+ Create New Sale</Text>
               </Button>
            </Flexbox>
            <Flexbox justify="end" fullWidth>
               <Button variant="contained" color="secondary">
                  <Text color="white">Create</Text>
               </Button>
            </Flexbox>
         </Dialog>
      </MuiThemeProvider>
   );
};
export default DuplicateInvoice;
