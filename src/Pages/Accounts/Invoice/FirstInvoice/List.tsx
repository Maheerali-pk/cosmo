import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../../Helpers/utils";
import Flexbox from "../../../../StyledComponents/Flexbox";
import Text from "../../../../StyledComponents/Text";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CustomInput from "../../../../Components/CustomInput";
import CustomSelect from "../../../../Components/CustomSelect";
import React, { useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import Grid, { grid } from "../../../../StyledComponents/Grid";
export interface TableProps {}

const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 0.25fr 0.5fr 1.5fr 2fr 0.5fr 0.75fr 0.75fr 0.75fr 0.75fr 0.75fr 0.75fr 0.75fr 0.25fr;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      font-size: ${toRem(13)};
   }

   & > ${Text}:nth-child(2),
   & > ${Text}:nth-child(12)
   /* & > ${Text}:nth-child(6), */
   /* & > ${Text}:nth-child(7) { */ {
      text-align: center !important;
   }
   & > *:nth-child(8),
   & > *:nth-child(9),
   & > *:nth-child(11) {
      margin-right: 1.8rem;
      text-align: right !important;
      input {
         text-align: right !important;
         margin-right: 1rem;
      }
   }
   & > input:nth-child(8),
   & > input:nth-child(9),
   & > input:nth-child(11) {
      text-align: right !important;
   }

   align-items: center;
   .MuiSelect-root {
      padding-right: 0 !important;
   }
`;

const TotalWrapper = styled(Text)`
   padding-top: ${toRem(10)};
   padding-bottom: ${toRem(10)};
`;

const BorderTextWrapper = styled(TotalWrapper)`
   border: 1px solid #707070;
   border-left: none;
   border-right: none;
`;

const HeadingsRowWrapper = styled(RowWrapper)`
   /* & > ${Text}:nth-child(9),
   & > ${Text}:nth-child(10) {
      text-align: center !important;
   } */
   overflow-y: scroll;
   min-height: 2.125rem;
   padding-top: 0 !important;
   padding-bottom: 0 !important;
`;

interface RowProps {
   items: string[];
   sr: number;
   description: string;
   qty: number;
   UOM: string[];
   rate: number;
   discount: number;
   totalDisc: number;
   tax: string[];
   totalTax: number;
   amount: number;
}

const Row: React.FC<RowProps> = ({ sr, items, description, qty, UOM, discount, totalDisc, tax, totalTax, amount }) => {
   const [uom, setUom] = useState(UOM[0]);
   const [taxValue, setTaxValue] = useState(tax[0]);
   const [autocompleteValue, setAutocompleteValue] = useState(items[0]);
   return (
      <RowWrapper>
         <DragIndicatorIcon></DragIndicatorIcon>
         <Text>{sr}</Text>
         <Autocomplete
            style={{ borderBottom: "none" }}
            options={items}
            value={autocompleteValue}
            onChange={(e, newValue) => setAutocompleteValue(newValue || "")}
            getOptionLabel={(option) => option}
            renderInput={(params) => (
               <TextField
                  {...params}
                  InputProps={{
                     ...params.InputProps,
                     endAdornment: <></>,
                     disableUnderline: true,
                  }}
                  inputProps={{
                     style: { fontSize: toRem(13) },
                     ...params.inputProps,
                  }}
                  placeholder="Item"
               ></TextField>
            )}
         ></Autocomplete>
         <CustomInput inputStyles={{ fontSize: toRem(13) }} placeholder="Enter description"></CustomInput>

         <CustomInput
            staticType="number"
            type="number"
            inputStyles={{ fontSize: toRem(13) }}
            placeholder="0"
         ></CustomInput>
         <CustomSelect
            style={{ fontSize: toRem(13), paddingRight: 0 }}
            inputProps={{ style: { paddingRight: 0 } }}
            IconComponent={React.Fragment}
            onValueChange={setUom}
            value={uom}
            options={stringsToOptions(UOM)}
         ></CustomSelect>
         <CustomInput
            staticType="number"
            type="number"
            inputStyles={{ fontSize: toRem(13) }}
            placeholder="0"
         ></CustomInput>
         <CustomInput
            staticType="number"
            type="number"
            inputStyles={{ fontSize: toRem(13) }}
            placeholder="0"
         ></CustomInput>
         <CustomInput
            staticType="number"
            type="number"
            inputStyles={{ fontSize: toRem(13) }}
            placeholder="0"
         ></CustomInput>
         <CustomSelect
            style={{ fontSize: toRem(13), paddingRight: 0 }}
            inputProps={{ style: { paddingRight: 0 } }}
            IconComponent={React.Fragment}
            onValueChange={setTaxValue}
            value={taxValue}
            options={stringsToOptions(tax)}
         ></CustomSelect>
         <CustomInput
            staticType="number"
            type="number"
            inputStyles={{ fontSize: toRem(13) }}
            placeholder="0"
         ></CustomInput>
         <Text>{amount}</Text>
         <IconButton style={{ padding: 0 }}>
            <MoreHorizIcon></MoreHorizIcon>
         </IconButton>
      </RowWrapper>
   );
};

const HeadingsRow = () => {
   return (
      <HeadingsRowWrapper style={{ overflowY: "scroll", background: colors.headingBackground }}>
         <div></div>
         <Text>Sr</Text>
         <Text>Item</Text>
         <Text>Description</Text>
         <Text>Qty</Text>
         <Text>UOM</Text>
         <Text>Rate</Text>
         <Text>Discount</Text>
         <Text>Total Disc</Text>
         <Text>Tax</Text>
         <Text>Total Tax</Text>
         <Text>Amount</Text>
         <div></div>
      </HeadingsRowWrapper>
   );
};

const TableBody = styled(Flexbox)`
   overflow: auto;
   height: 100%;
   overflow-y: scroll;
`;

const data: RowProps[] = repeat(
   {
      description: "",
      UOM: ["Option 1", "Option 2"],
      amount: 100,
      discount: 50,
      qty: 2,
      sr: 1,
      items: ["Item 1", "Item 2", "Test 3"],
      tax: ["PST", "N/A", "USD"],
      totalTax: 100,
      rate: 300,
      totalDisc: 0,
   } as RowProps,
   3
);

const FooterWrapper = styled(Flexbox)`
   border-bottom: 1px solid #e1e1e1;
`;

const List = () => {
   return (
      <>
         <HeadingsRow></HeadingsRow>
         <TableBody column fullWidth>
            {data.map((x) => (
               <Row {...x}></Row>
            ))}
         </TableBody>
         <Flexbox padding={`${toRem(10)} 2rem`} fullWidth justify="space-between">
            <Flexbox gap="1rem">
               <Text size={13} cursorPointer underline>
                  Add Item
               </Text>
               <Text size={13} cursorPointer underline>
                  Clear List
               </Text>
               <Text size={13} cursorPointer underline>
                  Clear Details
               </Text>
            </Flexbox>
            <FooterWrapper pb={10} pl={100} gap={80}>
               <Text size={13} fontFamily="semibold">
                  Subtotal
               </Text>
               <Flexbox align="start">
                  <Text size={13} mr={4}>
                     1000
                  </Text>
                  <Text size={8}>USD</Text>
               </Flexbox>
            </FooterWrapper>
         </Flexbox>
      </>
   );
};

export default List;
