import styled from "styled-components";
import { colors, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Header from "./Header";
import SubHeader from "./SubHeader";
import SelectsRow from "./SelectsRow";
export interface AccountRecieveablesProps {}

const PageWrapper = styled.div`
   display: grid;
   height: 100%;
   width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: auto auto auto 10fr;
`;

const AccountRecieveables: React.FC<AccountRecieveablesProps> = () => {
   return (
      <PageWrapper>
         <Header></Header>
         <SubHeader></SubHeader>
         <SelectsRow></SelectsRow>
      </PageWrapper>
   );
};

export default AccountRecieveables;
