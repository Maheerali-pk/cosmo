import styled from "styled-components";
import { colors, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Button from "@material-ui/core/Button";
import PageContentHeader from "../../../Components/PageContentHeader";
import CloseIcon from "@material-ui/icons/Close";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import Dropdown from "../../../Components/Dropdown";
import DetailsTab from "./DetailsTab";
// import Table from "./Table";
export interface AccountRecieveablesProps {}
const StickyFooterWrapper = styled(Flexbox)`
   position: fixed;
   bottom: 0;
   right: 0;
   width: calc(100% - 15rem);
   background: ${colors.headingBackground};
`;
const StickyFooter: React.FC<AccountRecieveablesProps> = () => {
   return (
      <StickyFooterWrapper padding="0.75rem 1rem" fullWidth justify="end">
         <Button color="secondary" variant="contained">
            Save
         </Button>
      </StickyFooterWrapper>
   );
};

const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content auto;
`;

const IconButtonWrapper = styled(IconButton)`
   padding: 0 !important;
   width: fit-content !important;
`;

const InventoryItem: React.FC = () => {
   return (
      <Layout navbarItems={["Airmed", "Supply Chain", "Logistics"]}>
         <PageWrapper>
            <PageContentHeader
               items={["Planning", "Sourcing", "Production", "Logistics", "Reports"]}
            ></PageContentHeader>
            <Flexbox padding="1.25rem 0.75rem 1.25rem 2rem" justify="space-between">
               <Flexbox gap={12}>
                  <Text fontFamily="semibold">12</Text>
                  <Text fontFamily="semibold">6" Scaled Timber</Text>
               </Flexbox>
               <Flexbox gap={16}>
                  <Button variant="contained">
                     <Dropdown
                        label="Menu"
                        showDropdownIcon
                        items={[
                           { text: "Item 1", onClick: () => {} },
                           { text: "Item 2", onClick: () => {} },
                        ]}
                     ></Dropdown>
                  </Button>
                  <Button variant="contained">Save</Button>
                  <CloseIcon style={{ marginTop: "-1rem" }} fontSize="small"></CloseIcon>
               </Flexbox>
            </Flexbox>
            <Flexbox overflowAuto column fullWidth>
               <Tabs
                  wrapperStyles={{ padding: "0.1rem 2rem", borderBottom: `${toRem(2)} solid #E1E1E1` }}
                  tabStyles={{ paddingBottom: "0.7rem" }}
                  titles={["Details", "Warehouse", "Purchase", "Sale", "Transactions"]}
               >
                  <DetailsTab></DetailsTab>
               </Tabs>
            </Flexbox>
         </PageWrapper>
      </Layout>
   );
};

export default InventoryItem;
