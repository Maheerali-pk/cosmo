import styled from "styled-components";
import { colors, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SubHeader from "./SubHeader";
import SelectsRow from "./SelectsRow";
// import Table from "./Table";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import useSelect from "../../../Hooks/useSelect";
import useDatePicker from "../../../Hooks/useDatePicker";
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
const Journal: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <PageWrapper>
            <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader>
            <SubHeader></SubHeader>
            <SelectsRow></SelectsRow>
            <Table></Table>
         </PageWrapper>
      </Layout>
   );
};

export default Journal;
