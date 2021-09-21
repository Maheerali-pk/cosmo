import styled from "styled-components";
import { colors, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import SubHeader from "./SubHeader";
// import Table from "./Table";
import PageContentHeader from "../../../Components/PageContentHeader";
import Layout from "../../../Components/Layout";
import useSelect from "../../../Hooks/useSelect";
import useDatePicker from "../../../Hooks/useDatePicker";
import Table from "./Table";
import PageSubHeaderWrapper from "../../../StyledComponents/PageSubHeaderWrapper";
import { Button, ButtonGroup, Checkbox, Icon, IconButton } from "@material-ui/core";

import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

export interface AccountRecieveablesProps {}

const PageWrapper = styled.div`
   display: grid;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content min-content min-content auto;
`;

const DropdownIconButtonWrapper = styled(Button)`
   min-width: fit-content !important;
   padding: 0 !important;
   display: flex;
   align-items: center;
`;

const JournalEntry: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Layout navbarItems={["Airmed", "Accounting", "Accounts"]}>
         <Flexbox fullHeight column justify="space-between">
            <PageWrapper>
               <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader>
               <PageSubHeaderWrapper>
                  <Flexbox>
                     <Text fontFamily="semibold" size={20} mr={16}>
                        125
                     </Text>
                     <Text fontFamily="semibold" size={20}>
                        General Journal Entry
                     </Text>
                  </Flexbox>
               </PageSubHeaderWrapper>
               <PageSubHeaderWrapper>
                  <Flexbox gap={64}>
                     <Flexbox gap={16}>
                        <Text size={13} color="graySubHeading">
                           ID
                        </Text>
                        <Text size={13} color="graySubHeading">
                           OTH-00297
                        </Text>
                     </Flexbox>
                     <Flexbox gap={16}>
                        <Text size={13} color="graySubHeading">
                           Date
                        </Text>
                        <Text size={13}>05/07/19</Text>
                     </Flexbox>
                     <Flexbox gap={16}>
                        <Checkbox defaultChecked></Checkbox>
                        <Text size={13}>Adjusting Entry</Text>
                     </Flexbox>
                  </Flexbox>

                  <Flexbox>
                     <Text size={13} mr={24}>
                        Updated by Mishal Sikander Yesterday
                     </Text>
                     <Flexbox gap={4}>
                        <IconButton style={{ padding: "0.25rem" }}>
                           <HistoryIcon fontSize="small"></HistoryIcon>
                        </IconButton>
                        <IconButton style={{ padding: "0.25rem" }}>
                           <MoreHorizIcon fontSize="small"></MoreHorizIcon>
                        </IconButton>
                     </Flexbox>
                  </Flexbox>
               </PageSubHeaderWrapper>
               <Table></Table>
            </PageWrapper>
            <Flexbox fullWidth padding="0.75rem" background="headingBackground" justify="space-between">
               <ButtonGroup disableElevation variant="contained">
                  <Button>Export</Button>
                  <DropdownIconButtonWrapper>
                     <ArrowDropDownIcon></ArrowDropDownIcon>
                  </DropdownIconButtonWrapper>
               </ButtonGroup>
               <Flexbox gap={16}>
                  <Button variant="contained">Save & Close</Button>
                  <Button variant="contained" color="secondary">
                     Save & New
                  </Button>
               </Flexbox>
            </Flexbox>
         </Flexbox>
      </Layout>
   );
};

export default JournalEntry;
