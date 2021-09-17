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

const Directory: React.FC = () => {
   return (
      <SettingsPageLayout navbarItems={["Settings", "Permissions"]}>
         <Flexbox column overflowAuto fullWidth>
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
