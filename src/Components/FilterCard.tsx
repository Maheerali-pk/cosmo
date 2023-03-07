import styled from "styled-components";
import { toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import Text from "../StyledComponents/Text";
import { Close } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";

interface IFilterItem {
   text: string;
   label: string;
}
interface FilterCardProps {
   items: IFilterItem[];
   heading: string;
}

const CloseBtn = styled(Flexbox)`
   cursor: pointer;
   opacity: 0.6;
   transition: opacity 0.2s ease-in-out;
   position: absolute;
   top: 50%;
   right: 5px;
   transform: translateY(-50%);
   &:hover {
      opacity: 0.8 !important;
      color: #536677;
   }
   svg {
      font-size: 17px;
   }
   display: none !important;
`;
const CardHeading = styled(Flexbox)`
   padding: ${toRem(10)} ${toRem(32)};
   border-bottom: 1px solid #e8e8e8;
   border-top-left-radius: 10px;
   border-top-right-radius: 10px;
   position: relative;
`;
const CardBody = styled(Flexbox)`
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;

   height: 220px;
   overflow: auto;
`;
const CardWrapper = styled(Flexbox)`
   &:hover {
      ${CloseBtn} {
         display: flex !important;
      }
      ${CardHeading}, ${CardBody} {
         background-color: rgba(255, 255, 255, 0.6);
      }
   }
`;
const FilterCard: React.FC<FilterCardProps> = ({ items, heading }) => {
   const [shouldSelectAll, setShouldSelectAll] = useState(false);
   const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());
   const onSelectAllChange = (checked: boolean) => {
      if (checked) {
         setShouldSelectAll(true);
         setSelectedItems(
            new Set(
               Array(items.length)
                  .fill(0)
                  .map((x, i) => i)
            )
         );
      } else {
         setShouldSelectAll(false);
         setSelectedItems(new Set());
      }
   };
   const onItemChange = (index: number, checked: boolean) => {
      if (checked) {
         setSelectedItems(selectedItems.add(index));
      } else {
         const newSet = new Set(selectedItems);
         newSet.delete(index);
         setSelectedItems(newSet);
      }
   };
   return (
      <CardWrapper column fullWidth>
         <CardHeading background="white" fullWidth>
            <FormGroup>
               <FormControlLabel
                  control={
                     <Checkbox
                        onChange={(e) => onSelectAllChange(e.target.checked)}
                        checked={shouldSelectAll}
                     />
                  }
                  label={
                     <Text ml={12} size={12} color={"grayHeading"}>
                        {heading}
                     </Text>
                  }
               />
            </FormGroup>
            <CloseBtn align="center" justify="center">
               <Close></Close>
            </CloseBtn>
         </CardHeading>
         <CardBody
            column
            pt={14}
            px={32}
            background="white"
            gap={10}
            pb={20}
            fullWidth
         >
            {items.map((item, i) => (
               <FormGroup>
                  <FormControlLabel
                     control={
                        <Checkbox
                           onChange={(e) => onItemChange(i, e.target.checked)}
                           checked={selectedItems.has(i)}
                        />
                     }
                     label={
                        <Text ml={12} size={12} color={"grayHeading"}>
                           {item.text} (<b>&nbsp;{item.label}&nbsp;</b>)
                        </Text>
                     }
                  />
               </FormGroup>
            ))}
         </CardBody>
      </CardWrapper>
   );
};

export default FilterCard;
