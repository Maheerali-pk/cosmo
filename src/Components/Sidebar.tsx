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
import SidebarItemWrapper from "../StyledComponents/SidebarItemWrapper";
import SidebarItem, { SidebarRectangle } from "./SidebarItem";
import SmallSidebar from "./SmallSidebar";
import RoundImage from "../StyledComponents/RoundImage";
import { ChevronLeft, ChevronRight, Home } from "@material-ui/icons";

export interface SidebarProps {}

// const SidebarWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `

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
   ${flexbox({
      gap: 8,
      fullWidth: true,
      justify: "space-between",
      align: "center",
   })}
   border-top: 1px solid ${colors.graySelection};
   padding-top: 0.75rem;
`;

interface SidebarItemProps {
   text: string;
   isSelected?: boolean;
}

const SidebarWrapper = styled.div`
   ${flexbox({ column: true, justify: "space-between" })};
   background-color: rgb(53, 64, 73);
   height: 100%;
   color: ${colors.grayText};
   width: 85px;
`;

const MainWrapper = styled.div`
   display: grid;
   grid-template-columns: 85px 217px;
`;
const BackArrowIcon = styled(Icon)`
   cursor: pointer;
   color: ${colors.grayText};
`;

const MainButtonWrapper = styled.div<{ selected?: boolean }>`
   display: flex;
   flex-direction: column;
   align-items: center;

   height: 58.65px !important;
   width: 58.65px !important;
   justify-content: space-evenly;
   color: white;
   cursor: pointer;
   opacity: 0.6;
   &:hover {
      opacity: 1 !important;
   }
   div {
      color: white !important;
   }
   svg {
      fill: white !important;
      color: white !important;
      font-size: 22px;
   }
   font-size: 8px;
   text-transform: uppercase;
   border-radius: 5px;
   background-color: ${(p) => (p.selected ? "#5003b0" : "transparent")};
   opacity: ${(p) => (p.selected ? "1" : "0.6")};
`;
const SidebarOpenButtonWrapper = styled(IconButton)`
   height: 60px;
   display: flex;
   align-items: center;
   justify-content: center;
   width: 100%;
   border-radius: 0 !important;
   &:hover {
      background-color: rgba(255, 255, 255, 0.1) !important;
   }
   transition: none;
`;
const Sidebar: React.FC<SidebarProps> = () => {
   const [
      { sidebarItems, selectedItem, isSidebarOpen, isSmallSidebarOpen },
      dispatch,
   ] = useGlobalContext();
   const renderSidebarItems = () => {
      return sidebarItems.map((item) => (
         <SidebarItem
            text={item}
            isSelected={selectedItem === item}
         ></SidebarItem>
      ));
   };
   // if (isSidebarOpen) {
   //    return (
   //       <SidebarWrapper>
   //          <Flexbox column fullWidth>
   //             <SidebarItemWrapper>
   //                <SidebarLogoWrapper>
   //                   <SidebarLogo>
   //                      <Text color="white" fontFamily="semibold">
   //                         A
   //                      </Text>
   //                   </SidebarLogo>
   //                   <Text color="grayHeading" fontFamily="semibold">
   //                      Airmed
   //                   </Text>
   //                </SidebarLogoWrapper>
   //             </SidebarItemWrapper>
   //             <Flexbox column gap="0.5rem" fullWidth>
   //                {renderSidebarItems()}
   //             </Flexbox>
   //          </Flexbox>
   //          <SidebarItemWrapper>
   //             <SidebarSetttingWrapper>
   //                <Flexbox gap={8}>
   //                   <SettingsOutlinedIcon />
   //                   <Text fontFamily="semibold">Settings</Text>
   //                </Flexbox>
   //                <BackArrowIcon
   //                   onClick={() => dispatch({ setIsSidebarOpen: false })}
   //                >
   //                   <ArrowBackIosIcon></ArrowBackIosIcon>
   //                </BackArrowIcon>
   //             </SidebarSetttingWrapper>
   //          </SidebarItemWrapper>
   //       </SidebarWrapper>
   //    );
   // } else {
   //    return (
   return (
      <MainWrapper>
         <SidebarWrapper
            style={{
               width: "100%",
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Flexbox column fullWidth align="center" gap={5}>
               <RoundImage
                  height="100%"
                  width="100%"
                  style={{
                     height: "auto",
                     width: "3rem",
                     marginBottom: "1rem",
                     marginTop: "1rem",
                  }}
                  src="https://workforcetrack.s3.amazonaws.com/c64646/u1/f2d6765b-8042-4b61-a322-a6e18fae3390?AWSAccessKeyId=AKIAIROQMC77E5UKWBWQ&Expires=1676361787&Signature=qMUmAkKXXG515FqZuUmbL047Hd8%3D"
               ></RoundImage>
               <MainButtonWrapper>
                  <Home fontSize="large" />
               </MainButtonWrapper>
               <MainButtonWrapper selected>
                  <SettingsOutlinedIcon fontSize="large" />
                  <div>Accounts</div>
               </MainButtonWrapper>
               <MainButtonWrapper>
                  <SettingsOutlinedIcon fontSize="large" />
                  <div>Accounts</div>
               </MainButtonWrapper>
               <MainButtonWrapper>
                  <SettingsOutlinedIcon fontSize="large" />
                  <div>Accounts</div>
               </MainButtonWrapper>
               <MainButtonWrapper>
                  <SettingsOutlinedIcon fontSize="large" />
                  <div>Accounts</div>
               </MainButtonWrapper>
               <MainButtonWrapper>
                  <SettingsOutlinedIcon fontSize="large" />
                  <div>Accounts</div>
               </MainButtonWrapper>
               <MainButtonWrapper>
                  <SettingsOutlinedIcon fontSize="large" />
                  <div>Accounts</div>
               </MainButtonWrapper>
               <MainButtonWrapper>
                  <SettingsOutlinedIcon fontSize="large" />
                  <div>Accounts</div>
               </MainButtonWrapper>
            </Flexbox>

            <SidebarOpenButtonWrapper
               onClick={() =>
                  dispatch({
                     setState: { isSmallSidebarOpen: !isSmallSidebarOpen },
                  })
               }
            >
               {isSmallSidebarOpen ? (
                  <ChevronLeft style={{ color: "white" }}></ChevronLeft>
               ) : (
                  <ChevronRight style={{ color: "white" }}></ChevronRight>
               )}
            </SidebarOpenButtonWrapper>
         </SidebarWrapper>
         <SmallSidebar
            headings={[
               {
                  selected: true,
                  items: [
                     { name: "Sales Quotes", showAddBtn: true, selected: true },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                  ],
                  title: "Accounting",
               },
               {
                  selected: false,
                  items: [
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                  ],
                  title: "Accounting",
               },
               {
                  selected: false,
                  items: [
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                     {
                        name: "Sales Quotes",
                        showAddBtn: true,
                        selected: false,
                     },
                  ],
                  title: "Accounting",
               },
            ]}
            title="Accounts"
            showAddBtn
         ></SmallSidebar>
      </MainWrapper>
   );
   //    );
   // }
};

export default Sidebar;
