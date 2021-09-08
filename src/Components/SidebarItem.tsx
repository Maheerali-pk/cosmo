import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import { flexbox } from "../StyledComponents/Flexbox";
import SidebarItemWrapper from "../StyledComponents/SidebarItemWrapper";
import Text from "../StyledComponents/Text";
export const SidebarRectangle = styled.div`
   background-color: ${colors.grayShapes};
   height: ${toRem(26)};
   width: ${toRem(26)};
   border-radius: 4px;
   /* margin-left: 0.5rem; */
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
export default SidebarItem;
