import styled from "styled-components";
import { toEm, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";

interface HeaderProps {}

const Line = styled.div`
   height: ${toEm(10)};
   background-color: #a81fa8;
   border-radius: 100px;
   margin-top: 0.25em;
`;

const Line1 = styled(Line)`
   width: 1.5em;
`;
export const Line2 = styled(Line)`
   width: 100%;
`;
const Header: React.FC<HeaderProps> = () => {
   return (
      <Flexbox em gap={4} px={24} pt={16} fullWidth align="center">
         <Line1></Line1>
         <Text em fontFamily="bold" size={26} color="black">
            INVOICE
         </Text>
         <Line2></Line2>
         <Flexbox em borderRadius={10} background="grayLine" width={167} pt={16} pb={16} justify="center">
            <Text em fontFamily="bold" color="black" fontWeight="bold" size={33}>
               LOGO
            </Text>
         </Flexbox>
      </Flexbox>
   );
};

export default Header;
