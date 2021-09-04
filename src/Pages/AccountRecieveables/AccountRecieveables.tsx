import styled from "styled-components";
import { colors, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Header from "./Header";
import SubHeader from "./SubHeader";
export interface AccountRecieveablesProps {}

const PageWrapper = styled(Flexbox)`
   border-left: 2px solid ${colors.pageOutlineSkyblue};
`;

const AccountRecieveables: React.FC<AccountRecieveablesProps> = () => {
   return (
      <PageWrapper column fullWidth fullHeight>
         <Header></Header>
         <SubHeader></SubHeader>
      </PageWrapper>
   );
};

export default AccountRecieveables;
