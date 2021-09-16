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
import CustomersTable from "./CustomersTable";
import InventoryTable from "./InventoryTable";
const RowWrapper = styled(Grid)`
   width: 100%;
   grid-template-columns: 8fr 1fr;
   min-height: ${toRem(37)};
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   border-bottom: 1px solid #edf2f9;
   & > *:nth-child(2) {
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
`;

interface RowProps {
   name: string;
   members: string;
}

const rows: RowProps[] = [...repeat({ name: "Team Name", members: "2" }, 6)];

const Row: React.FC<RowProps> = ({ members, name }) => {
   return (
      <RowWrapper fullWidth>
         <Text>{name}</Text>
         <Text>{members}</Text>
      </RowWrapper>
   );
};

const Directory: React.FC = () => {
   return (
      <SettingsPageLayout navbarItems={["Settings", "Permissions"]}>
         <Flexbox column fullWidth>
            <Flexbox fullWidth justify="space-between" padding="0 2rem 1.25rem 2rem">
               <Text size={20} fontFamily="semibold">
                  Permissions
               </Text>
               <Button variant="contained">
                  <Flexbox gap={10}>
                     <Text>Menu</Text>
                     <ArrowDropDownIcon />
                  </Flexbox>
               </Button>
            </Flexbox>

            <Tabs
               buttonStyles={{ paddingBottom: "0.75rem", marginBottom: "0.2rem" }}
               headerStyles={{ paddingLeft: "2rem" }}
               titles={["Customers", "Supplies", "Inventory", "Services"]}
            >
               <CustomersTable></CustomersTable>
               <div></div>
               <InventoryTable></InventoryTable>
            </Tabs>
         </Flexbox>
      </SettingsPageLayout>
   );
};
export default Directory;
