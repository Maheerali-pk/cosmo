import styled from "styled-components";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { colors, toRem } from "../Helpers/utils";
import Flexbox, { flexbox } from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import { Icon, IconButton } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { useState } from "react";

export interface SidebarProps {}

// const SidebarWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `

const SidebarItemWrapper = styled.div<{ selected?: boolean }>`
   ${flexbox({ gap: 12 })}
   display: flex;
   padding: 0.7rem;
   width: 100%;
   color: ${colors.grayText};
   margin-bottom: 0.5rem;
   cursor: pointer;
   &:hover {
      background-color: ${colors.graySelection};
   }
   transition: all 0.2s ease-in-out;
   ${(p) => p.selected && `background-color: ${colors.graySelection}`}
`;

const SidebarRectangle = styled.div`
   background-color: ${colors.grayShapes};
   height: ${toRem(26)};
   width: ${toRem(26)};
   border-radius: 4px;
   /* margin-left: 0.5rem; */
`;

const SidebarLogo = styled(SidebarRectangle)`
   background-color: ${colors.sidebarLogoPurple};
   color: white;
   ${flexbox({ justify: "center", align: "center" })}
`;

const SidebarLogoWrapper = styled.div`
   ${flexbox({ gap: 8, fullWidth: true, align: "center" })}
   border-bottom: 1px solid ${colors.graySelection};
   padding-bottom: 0.75rem;
`;

const SidebarSetttingWrapper = styled.div`
   ${flexbox({ gap: 8, fullWidth: true, justify: "space-between", align: "center" })}
   border-top: 1px solid ${colors.graySelection};
   padding-top: 0.75rem;
`;

interface SidebarItemProps {
   text: string;
   isSelected?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ text, isSelected }) => {
   return (
      <SidebarItemWrapper selected={isSelected}>
         <SidebarRectangle></SidebarRectangle>
         <Text fontFamily="semibold">{text}</Text>
      </SidebarItemWrapper>
   );
};

const SidebarWrapper = styled.div`
   ${flexbox({ column: true, justify: "space-between" })};
   background-color: ${colors.sidebarBackground};
   height: 100%;
   color: ${colors.grayText};
`;

const BackArrowIcon = styled(Icon)`
   cursor: pointer;
   color: ${colors.grayText};
`;

const Sidebar: React.FC<SidebarProps> = () => {
   const [{ sidebarItems, selectedItem, isSidebarOpen }, dispatch] = useGlobalContext();
   const renderSidebarItems = () => {
      return sidebarItems.map((item) => <SidebarItem text={item} isSelected={selectedItem === item}></SidebarItem>);
   };
   if (isSidebarOpen) {
      return (
         <SidebarWrapper>
            <Flexbox column fullWidth>
               <SidebarItemWrapper>
                  <SidebarLogoWrapper>
                     <SidebarLogo>
                        <Text color="white" fontFamily="semibold">
                           A
                        </Text>
                     </SidebarLogo>
                     <Text color="grayHeading" fontFamily="semibold">
                        Airmed
                     </Text>
                  </SidebarLogoWrapper>
               </SidebarItemWrapper>
               <Flexbox column gap="0.5rem" fullWidth>
                  {renderSidebarItems()}
               </Flexbox>
            </Flexbox>
            <SidebarItemWrapper>
               <SidebarSetttingWrapper>
                  <Flexbox gap={8}>
                     <SettingsOutlinedIcon />
                     <Text fontFamily="semibold">Settings</Text>
                  </Flexbox>
                  <BackArrowIcon onClick={() => dispatch({ setIsSidebarOpen: false })}>
                     <ArrowBackIosIcon></ArrowBackIosIcon>
                  </BackArrowIcon>
               </SidebarSetttingWrapper>
            </SidebarItemWrapper>
         </SidebarWrapper>
      );
   } else {
      return (
         <SidebarWrapper style={{ width: "fit-content", justifyContent: "space-between" }}>
            <Flexbox column>
               <IconButton>
                  <SettingsOutlinedIcon />
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon />
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon />
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon />
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon />
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon />
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon />
               </IconButton>
            </Flexbox>

            <IconButton onClick={() => dispatch({ setIsSidebarOpen: true })}>
               <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </IconButton>
         </SidebarWrapper>
      );
   }
};

export default Sidebar;
