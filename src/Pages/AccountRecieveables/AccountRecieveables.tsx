import styled from "styled-components";
import { colors, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Header from "./Header";
import SubHeader from "./SubHeader";
import SelectsRow from "./SelectsRow";
import Table from "./Table";
export interface AccountRecieveablesProps {}

const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content min-content auto;
`;

const AccountRecieveables: React.FC<AccountRecieveablesProps> = () => {
   return (
      <PageWrapper>
         <Header></Header>
         <SubHeader></SubHeader>
         <SelectsRow></SelectsRow>
         <Table></Table>
      </PageWrapper>
   );
};

export default AccountRecieveables;
