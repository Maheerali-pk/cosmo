import styled from "styled-components";
import { colors, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";

//Sub Header

//Main Header
const HeaderWrapper = styled(Flexbox)`
   padding: 0.75rem 0.75rem 0.75rem 1.25rem;
`;

const QuickAccessWrapper = styled(Flexbox)`
   padding: ${toRem(6)};
   border-radius: 0.25rem;
   border: 1px solid ${colors.graySelection2};
   color: ${colors.grayText};
`;

const CtrlKWrapper = styled.div`
   padding: ${toRem(3)} 0.75rem;
   background-color: ${colors.graySelection};
   border-radius: ${toRem(2)};
`;
const Header: React.FC = () => {
   const headerItems = ["Accounts", "Sales", "Purchases", "Company", "Reports"];
   return (
      <HeaderWrapper justify="space-between" fullWidth>
         <Flexbox gap={32}>
            {headerItems.map((item) => (
               <Text fontFamily="semibold">{item}</Text>
            ))}
         </Flexbox>
         <QuickAccessWrapper gap={12}>
            <FileCopyIcon fontSize="small"></FileCopyIcon>
            <Text fontFamily="semibold" size={14}>
               Quick Access
            </Text>
            <CtrlKWrapper>
               <Text size={14}>Ctrl + K</Text>
            </CtrlKWrapper>
         </QuickAccessWrapper>
      </HeaderWrapper>
   );
};

export default Header;
