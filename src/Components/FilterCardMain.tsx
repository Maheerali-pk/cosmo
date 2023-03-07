import styled from "styled-components";
import { toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import { FormGroup, FormControlLabel, Checkbox } from "@material-ui/core";
import Text from "../StyledComponents/Text";
import { Close } from "@material-ui/icons";
import * as React from "react";
import { useState } from "react";
import Grid from "../StyledComponents/Grid";
import CustomSelect from "./CustomSelect";

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
   padding: ${toRem(10)} ${toRem(20)};
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
   ${Grid} {
      height: fit-content;
   }
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
const FilterCardMain: React.FC = () => {
   const [filterBy, setFilterBy] = useState("Start Date");
   const [condition, setCondition] = useState("Custom");
   const [from, setFrom] = useState(new Date());
   const [to, setTo] = useState(new Date());
   return (
      <CardWrapper column fullWidth fullHeight>
         <CardHeading background="white" fullWidth>
            <Text ml={12} size={12} color={"grayHeading"}>
               Period
            </Text>

            {/* <CloseBtn align="center" justify="center">
               <Close></Close>
            </CloseBtn> */}
         </CardHeading>
         <CardBody
            column
            pt={14}
            px={20}
            background="white"
            gap={10}
            pb={20}
            fullWidth
         >
            <Grid columns="1fr 2fr" fullWidth align="center">
               <Text ml={12} size={12} color={"grayHeading"}>
                  <b>Period: </b>
               </Text>
               <CustomSelect
                  options={[
                     { text: "Start Date", value: "Start Date" },
                     { text: "End Date", value: "End Date" },
                  ]}
                  onValueChange={setFilterBy}
                  value={filterBy}
               ></CustomSelect>
            </Grid>
            <Grid columns="1fr 2fr" fullWidth align="center">
               <Text ml={12} size={12} color={"grayHeading"}>
                  <b>Condition: </b>
               </Text>
               <CustomSelect
                  options={[
                     { text: "Custom", value: "Custom" },
                     { text: "Custom 1", value: "Custom 1" },
                     { text: "Custom 2", value: "Custom 2" },
                  ]}
                  onValueChange={setCondition}
                  value={condition}
               ></CustomSelect>
            </Grid>
            <Grid columns="1fr 2fr" fullWidth align="center">
               <Text ml={12} size={12} color={"grayHeading"}>
                  <b>Condition: </b>
               </Text>
               <CustomSelect
                  options={[
                     { text: "Custom", value: "Custom" },
                     { text: "Custom 1", value: "Custom 1" },
                     { text: "Custom 2", value: "Custom 2" },
                  ]}
                  onValueChange={setFilterBy}
                  value={filterBy}
               ></CustomSelect>
            </Grid>
            <Grid columns="1fr 2fr" fullWidth align="center">
               <Text ml={12} size={12} color={"grayHeading"}>
                  <b>Condition: </b>
               </Text>
               <CustomSelect
                  options={[
                     { text: "Custom", value: "Custom" },
                     { text: "Custom 1", value: "Custom 1" },
                     { text: "Custom 2", value: "Custom 2" },
                  ]}
                  onValueChange={setFilterBy}
                  value={filterBy}
               ></CustomSelect>
            </Grid>
         </CardBody>
      </CardWrapper>
   );
};

export default FilterCardMain;
