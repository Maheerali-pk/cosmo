import Text from "../StyledComponents/Text";
import * as React from "react";
import { useState } from "react";
import { Input } from "@material-ui/core";
import styled from "styled-components";
import Flexbox from "../StyledComponents/Flexbox";
import { toRem } from "../Helpers/utils";

interface EditableCellProps {
   text: string;
   // onChange: (val : string) => void;
   type?: "text" | "textbox" | "search";
}
const InputWrapper = styled(Input)`
   background-color: white;
   height: 20px;
   padding: 0 !important;
   font-size: ${toRem(12)};
   & input {
      border-radius: 3px !important;
      border: none !important;
      padding: 0 ${toRem(9.23)};
   }
`;
const CellWrapper = styled(Flexbox)`
   padding: 0 ${toRem(9.23)};
   height: ${toRem(30)};
   position: relative;
   &:after {
      content: "";
      display: block;
      /* height: 30px; */
      border-right: 1px solid #e8e8e8;
      position: absolute;
      right: 0;
      top: 5px;
      bottom: 5px;
   }
`;

const EditableCell: React.FC<EditableCellProps> = ({ text, type = "text" }) => {
   const [editing, setEditing] = useState(false);
   const [tempText, setTempText] = useState(text);
   if (editing) {
      return (
         <CellWrapper>
            <InputWrapper
               disableUnderline
               onKeyDown={(e) => {
                  if (e.key === "Enter") {
                     setEditing(false);
                  }
               }}
               value={tempText}
               onChange={(e) => setTempText(e.target.value)}
               autoFocus
               onBlur={() => setEditing(false)}
            ></InputWrapper>
         </CellWrapper>
      );
   }
   return (
      <CellWrapper>
         <Text size={12} onClick={() => setEditing(true)}>
            {tempText}
         </Text>
      </CellWrapper>
   );
};

export default EditableCell;
