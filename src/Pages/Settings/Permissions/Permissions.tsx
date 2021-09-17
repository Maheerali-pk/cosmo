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
const RowWrapper = styled(Grid)`
   grid-template-columns: 8fr 1fr;
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   border-bottom: 1px solid #edf2f9;
   & > *:nth-child(2) {
      text-align: center;
   }
   padding: 0.5rem 2rem;
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
`;

interface RowProps {
   name: string;
   members: string;
}

const rows: RowProps[] = [...repeat({ name: "Team Name", members: "2" }, 66)];

const Row: React.FC<RowProps> = ({ members, name }) => {
   return (
      <RowWrapper fullWidth>
         <Text>{name}</Text>
         <Text>{members}</Text>
      </RowWrapper>
   );
};

const Permissions: React.FC = () => {
   return (
      <SettingsPageLayout navbarItems={["Settings", "Permissions"]}>
         <Flexbox overflowAuto column fullWidth>
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
               titles={["Teams", "Users"]}
            >
               <Flexbox overflowAuto column fullWidth>
                  <HeadingsRowWrapper fullWidth>
                     <Text size={13}>Name</Text>
                     <Text size={13}>Members</Text>
                  </HeadingsRowWrapper>
                  <Flexbox column fullWidth overflowAuto>
                     {rows.map((x) => (
                        <Row {...x}></Row>
                     ))}
                  </Flexbox>
               </Flexbox>
               <div style={{ paddingLeft: "2rem" }}>Users</div>
            </Tabs>
         </Flexbox>
      </SettingsPageLayout>
   );
};
export default Permissions;
