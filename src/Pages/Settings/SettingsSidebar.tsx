import styled from "styled-components";
import SidebarItem from "../../Components/SidebarItem";
import { useGlobalContext } from "../../Contexts/GlobalContext/GlobalContext";
import { toRem } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";

const Wrapper = styled(Flexbox)`
   width: ${toRem(210)};
   background: white;
`;

const SettingsSidebar: React.FC = () => {
   console.log("Hello world");
   const [{ settingsSidebarItems, selectedSettingsSidebarItem }] = useGlobalContext();

   return (
      <Wrapper column gap={11}>
         {settingsSidebarItems.map((item) => (
            <SidebarItem isSelected={item === selectedSettingsSidebarItem} text={item}></SidebarItem>
         ))}
      </Wrapper>
   );
};
export default SettingsSidebar;
