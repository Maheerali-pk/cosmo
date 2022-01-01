import styled, { StyledComponent } from "styled-components";
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
import DragIndicatorIcon from "@material-ui/icons/DragIndicator";
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
   grid-template-columns: 0.25 1fr 1.5fr 1fr 2fr 0.25fr;
   padding: ${toRem(10)} 2rem;
   padding-left: 0rem;
   border-bottom: 1px solid ${colors.skyBlueLines};
   align-items: center;
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
const TableHeadingWrapper = styled(Flexbox)`
   border-bottom: ${toRem(1)} solid lightgray;
`;

const HeadingsRowWrapper = styled(RowWrapper)`
   background: ${colors.headingBackground};
   border-bottom: none;
`;

interface CustomTableProps {
   headings: string[];
   title: string;
   columns: string;
   rows: string[][];
   showDragIcon?: boolean;
}

const CustomTable: React.FC<CustomTableProps> = ({ headings, title, rows, columns, showDragIcon }) => {
   return (
      <Flexbox mt={40} column fullWidth>
         <TableHeadingWrapper fullWidth justify="space-between" mb={16}>
            <Text fontFamily="semibold" size={13}>
               {title}
            </Text>
            <IconButton style={{ padding: 0, width: "fit-content" }}>
               <AddCircleIcon color="secondary" fontSize="small"></AddCircleIcon>
            </IconButton>
         </TableHeadingWrapper>
         <HeadingsRowWrapper style={{ gridTemplateColumns: columns }}>
            {headings.map((x) => (
               <Text>{x}</Text>
            ))}
         </HeadingsRowWrapper>
         {rows.map((row) => (
            <RowWrapper style={{ gridTemplateColumns: columns }}>
               {showDragIcon && (
                  <Flexbox fullWidth justify="center">
                     <DragIndicatorIcon fontSize="small"></DragIndicatorIcon>
                  </Flexbox>
               )}
               {row.map((item) => (
                  <Text>{item}</Text>
               ))}
               <Flexbox fullWidth justify="end">
                  <IconButton style={{ padding: 0, width: "fit-content" }}>
                     <MoreHorizIcon></MoreHorizIcon>
                  </IconButton>
               </Flexbox>
            </RowWrapper>
         ))}
      </Flexbox>
   );
};

const tablesData: CustomTableProps[] = [
   {
      headings: ["", "Sr", "Person", "Relation", "Mobile", "Address", ""],
      columns: "4rem 0.25fr 1fr 1.5fr 1fr 2fr 0.25fr",
      title: "Emergency Contact",
      rows: repeat(["1", "Jane", "Wife", "+923009907621", "123 - C, Street 3, Town B, City M"], 2),
      showDragIcon: true,
   },
   {
      headings: ["", "Sr", "Item", "Category", "Details", "Allowed From", "Allowed Till", ""],
      columns: "4rem 0.25fr 1fr 1fr 2fr 1fr 1fr 0.25fr",
      title: "Equipment",
      rows: repeat(["1", "Toyota Corrolla", "Toyota Corrolla", "Company pool car allotted", "04/12/16", "04/12/16"], 2),
      showDragIcon: true,
   },
   {
      headings: ["", "Sr", "Title", "Category", "Details", "Updated", ""],
      columns: "4rem 0.25fr 1fr 1fr 2fr 1fr 0.25fr",
      title: "Documents",
      rows: repeat(["", "1", "CNIC", "ID Document", "ID Card", "04/12/16"], 2),
   },
   {
      headings: ["", "Sr", "Type", "Details", "Added By", "Date", ""],
      columns: "4rem 0.25fr 1fr 2fr 1fr 1fr 0.25fr",
      title: "Discipliniaries",
      rows: repeat(["", "1", "First Warning", "Non serious behaviour towars work", "Talha Mirza", "04/12/16"], 2),
   },
];

const OthersTab: React.FC = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Flexbox column fullWidth pb={100}>
         {tablesData.map((table) => (
            <CustomTable {...table}></CustomTable>
         ))}
      </Flexbox>
   );
};

export default OthersTab;
