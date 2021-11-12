import styled from "styled-components";
import { colors, fonts, repeat, stringsToOptions, toRem } from "../../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../../StyledComponents/Flexbox";
import Grid from "../../../../StyledComponents/Grid";
import UnderlinedHeading from "../../../../StyledComponents/UnderlinedHeading";
import RoundImage from "../../../../StyledComponents/RoundImage";
import Text from "../../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../../Components/PageContentHeader";
import Layout from "../../../../Components/Layout";
import TableRowCollapse from "../../../../Components/TableRowCollapse";
import { Icon, IconButton, TextField } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../../Components/Tabs";
import { useGlobalContext } from "../../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../../Dialogs/NewInvoiceDialog";
import { Stages } from "../../../../Components/Stages";
import SelectsRow from "./SelectsRow";
import Content from "./Content";
import List from "./List";
import SettingsIcon from "@material-ui/icons/Settings";
import Dropdown from "../../../../Components/Dropdown";
import CustomSelect from "../../../../Components/CustomSelect";
import React, { useState } from "react";
export interface AccountRecieveablesProps {}

const TableWrapper = styled(Grid)``;

interface TableFooterRowProps {
   title: string;
   selectOptions: string[];
   percent: string;
   total: string;
}
const FooterRowWrapper = styled(Grid)`
   align-items: center;
`;

const TableFooterRow: React.FC<TableFooterRowProps> = ({ percent, selectOptions, total, title }) => {
   const options = stringsToOptions(selectOptions);
   const [selectValue, setSelectValue] = useState(options[0].value);
   return (
      <FooterRowWrapper columns="1fr 1fr 1fr 1fr" gap="1rem" fullWidth>
         <Text size={13} fontFamily="semibold">
            {title}
         </Text>
         <CustomSelect
            wrapperWidth={toRem(120)}
            style={{ fontSize: toRem(13) }}
            onValueChange={setSelectValue}
            value={selectValue}
            options={options}
         ></CustomSelect>
         <Text size={13}>{percent}%</Text>
         <Flexbox align="start" gap="0.5rem">
            <Text size={13}>{total}</Text>
            <Text size={8}>USD</Text>
         </Flexbox>
      </FooterRowWrapper>
   );
};

const footerData: TableFooterRowProps[] = [
   { title: "Tax", selectOptions: ["Option 1", "Option 2"], percent: "15", total: "150" },
   { title: "Tax", selectOptions: ["Option 1", "Option 2"], percent: "15", total: "150" },
   { title: "Discount", selectOptions: ["Option 1", "Option 2"], percent: "15", total: "150" },
];

const Footer: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   const [selectValue, setSelectValue] = useState("Option 1");
   return (
      <Grid columns="2.5fr 1fr" gap="4rem" style={{ alignItems: "start" }} padding="2rem" pb={64} pt={8} fullWidth>
         <Flexbox gap="4rem" fullWidth>
            <Flexbox column fullWidth>
               <UnderlinedHeading mb={8}>
                  <Text size={13} pb={4} color="graySubHeading">
                     Internal Comments
                  </Text>
               </UnderlinedHeading>
               <Flexbox fullWidth gap="1rem" align="start">
                  <RoundImage src="https://www.visitfashions.com/wp-content/uploads/2020/04/imageedit_16_3949620852.jpg"></RoundImage>
                  <TextField
                     rows={2}
                     placeholder="Add a comment"
                     multiline
                     fullWidth
                     variant="outlined"
                     InputProps={{ style: { fontSize: toRem(13), padding: `${toRem(5)} ${toRem(8)}` } }}
                  ></TextField>
               </Flexbox>
            </Flexbox>
            <Flexbox column fullWidth>
               <UnderlinedHeading mb={8}>
                  <Text size={13} pb={4} color="graySubHeading">
                     Invoice Notes
                  </Text>
               </UnderlinedHeading>
               <TextField
                  rows={2}
                  placeholder="Add a note"
                  multiline
                  fullWidth
                  variant="outlined"
                  InputProps={{ style: { fontSize: toRem(13), padding: `${toRem(5)} ${toRem(8)}` } }}
               ></TextField>
            </Flexbox>
         </Flexbox>
         <Flexbox column fullWidth>
            <Flexbox fullWidth justify="end">
               <CustomSelect
                  style={{ fontSize: toRem(13), width: "7rem" }}
                  inputProps={{ style: { width: "50%", fontFamily: fonts.semibold } }}
                  options={[
                     { text: "Option 1", value: "Option 1" },
                     { text: "Option 2", value: "Option 2" },
                  ]}
                  value={selectValue}
                  onValueChange={setSelectValue}
               ></CustomSelect>
            </Flexbox>
            <Flexbox style={{ borderBottom: "1px solid #E1E1E1" }} column fullWidth>
               {footerData.map((x) => (
                  <TableFooterRow {...x}></TableFooterRow>
               ))}
            </Flexbox>
            <Flexbox pt={12} fullWidth justify="end" gap="2rem">
               <Text fontFamily="semibold">Total</Text>
               <Flexbox align="start" gap="0.25rem">
                  <Text fontFamily="semibold">1060</Text>
                  <Text size={8}>USD</Text>
               </Flexbox>
            </Flexbox>
            <Grid
               columns="1.75fr 1fr"
               gap="1rem"
               style={{ background: colors.graySelection }}
               fullWidth
               padding="0.25rem 1rem"
               mt={12}
            >
               <Flexbox column align="end" fullWidth>
                  <Text size={13} fontFamily="semibold">
                     Exchange - USD to PKR
                  </Text>
                  <Text size={13} fontFamily="semibold">
                     Total
                  </Text>
               </Flexbox>

               <Flexbox column align="end" fullWidth>
                  <Text size={13} underline>
                     154.85
                  </Text>
                  <Flexbox gap="0.25rem" align="start">
                     <Text size={13}>164,141.00</Text>
                     <Text size={8}>PKR</Text>
                  </Flexbox>
               </Flexbox>
            </Grid>
         </Flexbox>
      </Grid>
   );
};

export default Footer;
