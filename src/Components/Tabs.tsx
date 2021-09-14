import { ButtonBase } from "@material-ui/core";
import { ReactChild, useState } from "react";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import React from "react";
import { colors } from "../Helpers/utils";
import { CSSProperties } from "styled-components";

interface ITab {
   text: string;
   content: JSX.Element;
}

interface TabsProps {
   titles: string[];
   currentIndex?: number;
   headerStyles?: CSSProperties;
   buttonStyles?: CSSProperties;
}

const Tabs: React.FC<TabsProps> = ({ titles, currentIndex, children, headerStyles, buttonStyles = {} }) => {
   const [tabIndex, setTabIndex] = useState(currentIndex || 0);
   const childrenArr = React.Children.toArray(children);
   return (
      <>
         <Flexbox style={headerStyles ? { ...headerStyles } : {}} gap={32}>
            {titles.map((title, i) => (
               <ButtonBase
                  style={{ borderBottom: i === tabIndex ? `0.2rem solid` : "", padding: "0.2rem 0", ...buttonStyles }}
                  onClick={() => setTabIndex(i)}
               >
                  <Text style={{}} size={15} fontFamily="semibold">
                     {title}
                  </Text>
               </ButtonBase>
            ))}
         </Flexbox>
         {childrenArr[tabIndex]}
      </>
   );
};
export default Tabs;
