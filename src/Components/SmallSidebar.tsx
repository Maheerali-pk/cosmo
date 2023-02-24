import { IconButton, Accordion, Collapse } from "@material-ui/core";
import { Add } from "@material-ui/icons";
import styled from "styled-components";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import { useState } from "react";
import { toRem } from "../Helpers/utils";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
interface SmallSidebarProps {
   title: string;
   showAddBtn?: boolean;
   headings: {
      title: string;
      items: { name: string; showAddBtn: boolean; selected: boolean }[];
      selected: boolean;
   }[];
}

const AddButtonWrapper = styled(IconButton)`
   padding: 0rem !important;
   background-color: #2bbf57 !important;
   svg {
      color: white !important;
      fill: white !important;
      stroke: none !important;
      font-size: 18px;
   }
   height: 25px;
   width: 25px;
   aspect-ratio: 1;
   &:hover {
      background-color: #229544 !important;
   }
`;
const AddButtonWrapperSmall = styled(AddButtonWrapper)`
   height: 22px;
   width: 22px;
   svg {
      font-size: 15px;
   }
`;
const HeadingWrapper = styled(Flexbox)<{ selected?: boolean }>`
   background-color: ${(p) =>
      p.selected ? "rgba(80, 3, 176, 0.1)" : "transparent"};
   border-right: ${(p) => (p.selected ? "4px solid #5003b0" : "")};
   ${Text} {
      color: ${(p) => (p.selected ? "#5003b0" : "#1D252C")};
   }

   padding: 0
   cursor: pointer;
`;
const Wrapper = styled(Flexbox)<{ open?: boolean }>`
   border-right: 1px solid rgb(236, 239, 243);
   width: 217px;
   ${(p) =>
      !p.open &&
      `
      z-index: -1;
      transform: translateX(-100%);
   `} // transition: transform 0.15s ease-in-out;
   background: white;
`;
const SubMenuItemWrapper = styled(Flexbox)<{ selected?: boolean }>`
   border-radius: 30px;
   font-size: 12px;
   &:hover {
      background: #f5f7f9;
      ${AddButtonWrapper} {
         transform: scale(1);
      }
   }
   ${AddButtonWrapper} {
      transition: transform 0.075s ease;
      transform: ${(p) => (p.selected ? "scale(1)" : "scale(0)")};
   }
   cursor: pointer;
   padding-top: ${toRem(6)};
   padding-right: ${toRem(6)};
   padding-bottom: ${toRem(6)};
   padding-left: ${toRem(10.5)};
   ${Text} {
      color: #1d252c;
   }
`;

const SmallSidebar: React.FC<SmallSidebarProps> = ({
   title,
   showAddBtn,
   headings,
}) => {
   const [panel, setPanel] = useState(0);
   const [state, dispatch] = useGlobalContext();
   return (
      <Wrapper gap={16} column fullWidth open={state.isSmallSidebarOpen}>
         <Flexbox
            margin="15px 0 10px"
            px={24}
            justify="space-between"
            fullWidth
         >
            <Text size="15px" mt={15} mb={15}>
               <b>{title}</b>
            </Text>
            {showAddBtn && (
               <AddButtonWrapper>
                  <Add></Add>
               </AddButtonWrapper>
            )}
         </Flexbox>

         <Flexbox gap={4} column fullWidth>
            {headings.map((heading, i) => (
               <>
                  <HeadingWrapper
                     onClick={() => setPanel(panel === i ? -1 : i)}
                     fullWidth
                     selected={heading.selected}
                     pl={24}
                     py={6}
                  >
                     <Text size={"12px"}>{heading.title.toUpperCase()}</Text>
                  </HeadingWrapper>
                  <Collapse
                     style={{ width: "100%", margin: 0 }}
                     in={panel === i}
                  >
                     <Flexbox column fullWidth gap={2} px={24}>
                        {heading.items.map((item) => (
                           <SubMenuItemWrapper
                              fullWidth
                              justify="space-between"
                              selected={item.selected}
                              pl={8}
                              py={8}
                           >
                              <Text size="12px">{item.name}</Text>
                              {item.showAddBtn && (
                                 <AddButtonWrapperSmall>
                                    <Add></Add>
                                 </AddButtonWrapperSmall>
                              )}
                           </SubMenuItemWrapper>
                        ))}
                     </Flexbox>
                  </Collapse>
               </>
            ))}
         </Flexbox>
      </Wrapper>
   );
};

export default SmallSidebar;
