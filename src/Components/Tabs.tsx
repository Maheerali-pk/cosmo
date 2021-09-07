import { ButtonBase } from "@material-ui/core";
import { ReactChild, useState } from "react";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import React from "react";
import { colors } from "../Helpers/utils";

interface ITab {
   text: string;
   content: JSX.Element;
}

interface TabsProps {
   titles: string[];
   currentIndex?: number;
}

const Tabs: React.FC<TabsProps> = ({ titles, currentIndex, children }) => {
   const [tabIndex, setTabIndex] = useState(currentIndex || 0);
   const childrenArr = React.Children.toArray(children);
   return (
      <>
         <Flexbox gap={32}>
            {titles.map((title, i) => (
               <ButtonBase
                  style={{ borderBottom: i === tabIndex ? `0.2rem solid` : "", padding: "0.2rem 0" }}
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
