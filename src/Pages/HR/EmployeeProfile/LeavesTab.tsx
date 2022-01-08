import styled from "styled-components";
import { colors, fonts, toRem, repeat } from "../../../Helpers/utils";
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
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Icon, IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import NewLeaveDialog from "../../../Dialogs/NewLeave";
// import Table from "./Table";

export interface TableProps {}

export interface RowProps {
   items: string[];
}
const RowWrapper = styled.div`
   display: grid;
   width: 100%;
   grid-template-columns: 1fr 1fr 1fr 1fr 1fr 0.25fr;
   padding: ${toRem(10)} 2rem;
   padding-right: 0rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   ${Text} {
      font-size: ${toRem(13)};
   }
   ${Text}:last-child {
      text-align: right;
   }
   sup {
      font-size: 0.55rem;
   }
`;

const Row: React.FC<RowProps> = ({ items }) => {
   return (
      <RowWrapper>
         {items.map((x) => (
            <Text size={13}>{x}</Text>
         ))}
         <Flexbox justify="end" fullWidth>
            <IconButton style={{ padding: 0, width: "fit-content" }}>
               <MoreHorizIcon fontSize="small"></MoreHorizIcon>
            </IconButton>
         </Flexbox>
      </RowWrapper>
   );
};

const HeadingsRow = () => {
   const headings = ["Dates", "Type", "Reason", "Duration", "Backup Personh", ""];
   return (
      <RowWrapper style={{ borderBottom: "none", background: colors.headingBackground }}>
         {headings.map((x) => (
            <Text>{x}</Text>
         ))}
      </RowWrapper>
   );
};

const rowsData: string[][] = repeat(["05/28/21 - 05/31/21", "Airmed", "Vacation", "2.0", "Malik Tanveer Shah"], 5);

const Table: React.FC<TableProps> = () => {
   return (
      <>
         <HeadingsRow></HeadingsRow>
         <Flexbox column fullWidth>
            {rowsData.map((row) => (
               <Row items={row}></Row>
            ))}
         </Flexbox>
      </>
   );
};
interface LeaveCardProps {
   heading: string;
   value: string;
   haveButton?: boolean;
}
const LeaveCardWrapper = styled(Flexbox)`
   background: ${colors.sidebarBackground};
   border-radius: ${toRem(4)};
   width: ${toRem(210)};
`;

const LeaveCard: React.FC<LeaveCardProps> = ({ heading, value, haveButton }) => {
   return (
      <LeaveCardWrapper align="center" column padding="0.75rem 1.25rem">
         <Flexbox mb={16} fullWidth justify="space-between">
            <Text fontFamily="semibold">{heading}</Text>
            {haveButton && (
               <IconButton style={{ padding: 0 }}>
                  <AddCircleIcon></AddCircleIcon>
               </IconButton>
            )}
         </Flexbox>
         <Text fontFamily="semibold" size={24}>
            {value}
         </Text>
      </LeaveCardWrapper>
   );
};

const dummyLeaveCards: LeaveCardProps[] = [
   { heading: "Total", value: "24.0" },
   { heading: "Applied", value: "1.5", haveButton: true },
   { heading: "Taken", value: "4.5" },
   { heading: "Available", value: "18.0" },
];

const LeavesTab: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   console.log("Hgl");
   return (
      <>
         {state.dialog === NewLeaveDialog && <NewLeaveDialog></NewLeaveDialog>}
         <Flexbox overflowAuto column padding="2rem 2rem" fullWidth>
            <Flexbox mb={32} justify="center" fullWidth>
               <Grid gap="2rem" noOfColumns={4}>
                  {dummyLeaveCards.map((x) => (
                     <LeaveCard {...x}></LeaveCard>
                  ))}
               </Grid>
            </Flexbox>
            <Tabs
               tabStyles={{ fontSize: toRem(13) }}
               rightSideContent={
                  <Text onClick={() => dispatch({ setDialog: NewLeaveDialog })} isLink size={13}>
                     Apply
                  </Text>
               }
               wrapperStyles={{
                  marginBottom: "1rem",
                  borderBottom: "1px solid lightgray",
                  width: "100%",
                  paddingBottom: "0.1rem",
               }}
               titles={["Applied", "Taken", "Action"]}
            >
               <Table></Table>
               <Table></Table>
               <Table></Table>
            </Tabs>
         </Flexbox>
      </>
   );
};

export default LeavesTab;
