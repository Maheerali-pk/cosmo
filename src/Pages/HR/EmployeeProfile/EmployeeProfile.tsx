import styled from "styled-components";
import { colors, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import Button from "@material-ui/core/Button";
import PageContentHeader from "../../../Components/PageContentHeader";
import CloseIcon from "@material-ui/icons/Close";
import UserProfileRow from "../UserProfileRow";
import Layout from "../../../Components/Layout";
import Tabs from "../../../Components/Tabs";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
import ProfileTab from "./ProfileTab";
import LeavesTab from "./LeavesTab";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import OthersTab from "./OthersTab";
import PaysTab from "./PaysTab";
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
   grid-template-rows: min-content min-content min-content auto;
`;

const IconButtonWrapper = styled(IconButton)`
   padding: 0 !important;
   width: fit-content !important;
`;

const EmployeeProfile: React.FC = () => {
   return (
      <Layout navbarItems={["Airmed", "Human Resources", "People"]}>
         <PageWrapper>
            <PageContentHeader items={["Accounts", "Sales", "Purchases", "Company", "Reports"]}></PageContentHeader>
            <UserProfileRow
               name="Michael Foster"
               description="CFO"
               image="https://www.visitfashions.com/wp-content/uploads/2020/04/imageedit_16_3949620852.jpg"
            ></UserProfileRow>
            <Flexbox padding="1rem 2rem" column fullWidth>
               <Tabs
                  rightSideContent={
                     <Flexbox gap={16}>
                        <Flexbox align="start">
                           <IconButtonWrapper>
                              <AttachFileIcon></AttachFileIcon>
                           </IconButtonWrapper>
                           <Text size={14}>(2)</Text>
                        </Flexbox>
                        <IconButtonWrapper>
                           <HistoryIcon></HistoryIcon>
                        </IconButtonWrapper>
                        <IconButtonWrapper>
                           <MoreHorizIcon></MoreHorizIcon>
                        </IconButtonWrapper>
                     </Flexbox>
                  }
                  titles={["Profile", "Leaves", "Performance", "Pay", "Others"]}
               >
                  <ProfileTab></ProfileTab>
                  <LeavesTab></LeavesTab>
                  <div>performance</div>
                  <PaysTab></PaysTab>
                  <OthersTab></OthersTab>
               </Tabs>
            </Flexbox>
            <StickyFooter></StickyFooter>
         </PageWrapper>
      </Layout>
   );
};

export default EmployeeProfile;
