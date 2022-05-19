import styled from "styled-components";
import { colors, fonts, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import RoundImage from "../../../StyledComponents/RoundImage";
import Text from "../../../StyledComponents/Text";
import { Button, Icon, IconButton, TextField } from "@material-ui/core";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import CustomSelect from "../../../Components/CustomSelect";
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
      <Grid
         columns="2.5fr 1fr"
         gap="4rem"
         style={{ alignItems: "start", flexGrow: 1 }}
         padding="0 2rem"
         pb={64}
         fullWidth
      >
         <Flexbox gap="4rem" fullWidth align="start">
            <Flexbox column fullWidth>
               <UnderlinedHeading mb={8}>
                  <Text size={13} pb={4} color="graySubHeading">
                     Internal Comments
                  </Text>
               </UnderlinedHeading>
               <Flexbox fullWidth gap="1rem" align="start">
                  <RoundImage src="https://www.visitfashions.com/wp-content/uploads/2020/04/imageedit_16_3949620852.jpg"></RoundImage>
                  <Flexbox fullWidth column>
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
            </Flexbox>
            <Flexbox column fullWidth>
               <UnderlinedHeading mb={8}>
                  <Text size={13} pb={4} color="graySubHeading">
                     Check Notes
                  </Text>
               </UnderlinedHeading>
               <TextField
                  rows={2}
                  placeholder=""
                  multiline
                  fullWidth
                  variant="outlined"
                  InputProps={{ style: { fontSize: toRem(13), padding: `${toRem(5)} ${toRem(8)}` } }}
               ></TextField>
            </Flexbox>
         </Flexbox>
      </Grid>
   );
};

export default Footer;
