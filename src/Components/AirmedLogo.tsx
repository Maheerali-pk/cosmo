import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
const SidebarLogo = styled(Flexbox)`
   background-color: ${colors.sidebarLogoPurple};
   color: white;
   height: ${toRem(40)};
   width: ${toRem(40)};
   border-radius: 0.25rem;
`;

const AirmedLogo: React.FC = () => {
   return (
      <Flexbox gap={20}>
         <SidebarLogo justify="center" align="center">
            <Text color="white" size={32}>
               A
            </Text>
         </SidebarLogo>
         <Text size={32}>Airmed</Text>
      </Flexbox>
   );
};
export default AirmedLogo;
