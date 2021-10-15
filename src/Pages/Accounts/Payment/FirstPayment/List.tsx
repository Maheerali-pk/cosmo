import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../../Helpers/utils";
import Flexbox from "../../../../StyledComponents/Flexbox";
import Grid from "../../../../StyledComponents/Grid";
import Text from "../../../../StyledComponents/Text";
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CustomInput from "../../../../Components/CustomInput";
import CustomSelect from "../../../../Components/CustomSelect";
import React, { useState } from "react";
import { IconButton, TextField } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
export interface TableProps {}

const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 0.5fr 0.5fr 1fr 2fr 3fr 3fr 3fr 1fr;
   padding: ${toRem(10)} 2rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      font-size: ${toRem(13)};
   }

   /* & > ${Text}:nth-child(6), */
   /* & > ${Text}:nth-child(7) { */
    {
      text-align: center !important;
   }
   /* & > *:nth-child(8),
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
   } */

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
`;

const Row: React.FC<{ items: string[] }> = ({ items }) => {
   return (
      <RowWrapper>
         <DragIndicatorIcon></DragIndicatorIcon>
         {items.map((x) => (
            <Text>{x}</Text>
         ))}
      </RowWrapper>
   );
};

const HeadingsRow = () => {
   return (
      <HeadingsRowWrapper style={{ overflowY: "scroll", background: colors.headingBackground }}>
         <div></div>
         <Text>Sr</Text>
         <Text>Type</Text>
         <Text>ID</Text>
         <Text>Due Date</Text>
         <Text>Original Amount</Text>
         <Text>Amount Due</Text>
         <Text>Payment</Text>
      </HeadingsRowWrapper>
   );
};

const TableBody = styled(Flexbox)`
   overflow: auto;
   height: 100%;
   overflow-y: scroll;
`;

const data: string[][] = [
   ["1", "Invoice", "INV - 3276", "04/30/21", "400,000.00", "400,000.00", "200,000.00"],
   ["2", "Invoice", "", "", "", "", "200,000.00"],
   ["3", "Invoice", "CN - 125", "", "", "400,000.00", ""],
];

const FooterWrapper = styled(Flexbox)`
   border-bottom: 1px solid #e1e1e1;
`;

const List = () => {
   return (
      <>
         <HeadingsRow></HeadingsRow>
         <TableBody column fullWidth>
            {data.map((x) => (
               <Row items={x}></Row>
            ))}
         </TableBody>
         <Flexbox padding={`${toRem(10)} 2rem`} align="start" fullWidth justify="space-between">
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
            <Grid colGap="3rem" gap="0.25rem" noOfColumns={2}>
               <Text fontFamily="semibold" style={{ textAlign: "right" }}>
                  Amount Due
               </Text>
               <Flexbox align="start">
                  <Text mr={4} fontFamily="semibold">
                     350,000.00
                  </Text>
                  <Text size={8}>PKR</Text>
               </Flexbox>
               <Text fontFamily="semibold" style={{ textAlign: "right" }}>
                  Amount Recieved
               </Text>
               <Flexbox align="start">
                  <Text mr={4} fontFamily="semibold">
                     300,000.00
                  </Text>
                  <Text size={8}>PKR</Text>
               </Flexbox>
            </Grid>
         </Flexbox>
      </>
   );
};

export default List;
