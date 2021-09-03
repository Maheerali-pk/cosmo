import styled from "styled-components";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import { colors, toRem } from "../Helpers/utils";
import Flexbox, { flexbox } from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
export interface SidebarProps {}

// const SidebarWrapper = styled.div`
// 	display: flex;
// 	flex-direction: column;
// `

const SidebarItemWrapper = styled.div`
   ${flexbox({ gap: 8 })}
   display: flex;
   padding: 0.7rem;
   width: 100%;
   color: ${colors.grayText};
   margin-bottom: 0.5rem;
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
      <SidebarItemWrapper>
         <SidebarRectangle></SidebarRectangle>
         <Text fontFamily="semibold">{text}</Text>
      </SidebarItemWrapper>
   );
};

const SidebarWrapper = styled.div`
   ${flexbox({ column: true, justify: "space-between" })};
   background-color: ${colors.sidebarBackground};
   width: 20vw;
   height: 100%;
`;

const Sidebar: React.FC<SidebarProps> = () => {
   const [{ sidebarItems, selectedItem }] = useGlobalContext();
   const renderSidebarItems = () => {
      return sidebarItems.map((item) => <SidebarItem text={item} isSelected={selectedItem === item}></SidebarItem>);
   };
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
            <Flexbox column gap="0.5rem">
               {renderSidebarItems()}
            </Flexbox>
         </Flexbox>
         <SidebarItemWrapper>
            <SidebarSetttingWrapper>
               <Flexbox gap={8}>
                  <i className="fas fa-cog fa-lg" />
                  <Text fontFamily="semibold">Settings</Text>
               </Flexbox>
               <div>
                  <i className="fas fa-angle-left fa-lg"></i>
               </div>
            </SidebarSetttingWrapper>
         </SidebarItemWrapper>
      </SidebarWrapper>
   );
};

export default Sidebar;
