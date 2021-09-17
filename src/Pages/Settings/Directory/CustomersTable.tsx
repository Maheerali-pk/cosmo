import { Button, IconButton, Icon } from "@material-ui/core";
import styled from "styled-components";
import { colors, repeat, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Text from "../../../StyledComponents/Text";
import SettingsPageLayout from "../SettingsPageLayout";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import Tabs from "../../../Components/Tabs";
import PaginationTable from "../../../Components/PaginationTable";
const RowWrapper = styled(Grid)`
   width: 100%;
   grid-template-columns: 0.75fr 3fr 3fr 2.5fr 3fr 1.5fr;
   min-height: ${toRem(37)};
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   border-bottom: 1px solid #edf2f9;
   & > *:last-child {
      text-align: center;
   }
   padding-left: 2rem;
   padding-right: 2rem;
   &:hover {
      background-color: ${colors.headingBackground};
   }
   cursor: pointer;
`;
const HeadingsRowWrapper = styled(RowWrapper)`
   ${Text} {
      font-size: ${toRem(12)};
   }
   background: ${colors.headingBackground};
   border: none;
   border-top: ${toRem(2)} solid ${colors.sidebarBackground};
   height: fit-content;
   overflow-y: scroll;
`;

type RowProps = string[];

const rows: RowProps[] = [
   ...repeat(["123", "Accenture", "info@accenture.com", "04235861234", "Lahore, Pakistan", "Active"], 50),
];

const CustomersTable: React.FC = () => {
   return (
      <PaginationTable
         rows={rows}
         headings={["ID", "Title", "Email", "Phone", "Location", "Status"]}
         RowWrapper={RowWrapper}
         HeadingsRowWrapper={HeadingsRowWrapper}
      ></PaginationTable>
   );
};
export default CustomersTable;
