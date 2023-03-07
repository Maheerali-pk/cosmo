import { Button, ButtonBase } from "@material-ui/core";
import { ReactChild, useState } from "react";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import React from "react";
import { colors, toRem } from "../Helpers/utils";
import styled, { CSSProperties } from "styled-components";

interface ITab {
   text: string;
   label?: string;
}

interface TabsProps {
   titles: string[];
   labels?: string[];
   currentIndex?: number;
   headerStyles?: CSSProperties;
   buttonStyles?: CSSProperties;
   wrapperStyles?: CSSProperties;
   tabStyles?: CSSProperties;
   rightSideContent?: JSX.Element;
}
const TabsWrapper = styled(Flexbox)`
   border-radius: 3px;
   border: 1px solid #8d9ba8;
   padding: 0;
   height: ${toRem(30)};
`;
const TabWrapper = styled(Flexbox)<{
   selected?: boolean;
   hideBefore?: boolean;
}>`
   background: transparent;
   font-size: ${toRem(12)};
   padding-top: 6px;
   padding-bottom: 8px;
   padding-left: 10px;
   padding-right: 10px;
   position: relative;
   color: ${(p) => (p.selected ? "white !important" : "")};

   &:not(:last-child):before {
      content: "";
      position: absolute;
      z-index: -1;
      top: 4px;
      bottom: 4px;
      right: 0;
      width: 1px;
      background: ${(p) => (p.hideBefore ? "transparent" : "#ced5db")};
      z-index: 1;
   }
   &:hover {
      color: black;
   }
   cursor: pointer;
   &:first-child:after {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
   }
   &:last-child:after {
      right: -1px;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
   }

   &:after {
      content: "";
      position: absolute;
      top: 1px;
      bottom: 1px;
      left: 50%;
      right: 50%;
      transition: left 0.2s ease, right 0.2s ease, background-color 0.2s ease;
   }
   ${(p) =>
      p.selected &&
      `
   &:after {
      content: "";
      z-index: -1;
      top: -1px;
      bottom: -1px;
      left: -1px;
      right: -1px;
      opacity: 1;
      background-color: #8d9ba8;
   }
   `}
`;

const TabLabel = styled.div`
   position: absolute !important;
   top: -${toRem(14)};
   left: 50%;
   margin-left: -11px;
   display: inline-block;
   padding: 4px 5px;
   border-radius: 5px;
   font-size: ${toRem(11)};
   background-color: #536677;
   color: #fff;
`;
const Tabs: React.FC<TabsProps> = ({
   titles,
   currentIndex,
   children,
   labels,
   headerStyles,
   buttonStyles = {},
   wrapperStyles = {},
   tabStyles = {},
   rightSideContent = null,
}) => {
   const [tabIndex, setTabIndex] = useState(currentIndex || 0);
   const childrenArr = React.Children.toArray(children);
   return (
      <>
         <Flexbox style={wrapperStyles} justify="space-between" fullWidth>
            <TabsWrapper
               // style={headerStyles ? { ...headerStyles } : {}}
               align="center"
            >
               {titles.map((title, i) => (
                  <TabWrapper
                     hideBefore={tabIndex === i || tabIndex === i + 1}
                     selected={tabIndex === i}
                     onClick={() => setTabIndex(i)}
                  >
                     {title}
                     {labels?.[i] && <TabLabel>{labels?.[i]}</TabLabel>}
                  </TabWrapper>
               ))}
            </TabsWrapper>
            {rightSideContent}
         </Flexbox>
         {childrenArr[tabIndex]}
      </>
   );
};
export default Tabs;
