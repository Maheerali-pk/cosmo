import { Button, IconButton, Icon, Checkbox } from "@material-ui/core";
import styled from "styled-components";
import { colors, repeat, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Text from "../../../StyledComponents/Text";
import SettingsPageLayout from "../SettingsPageLayout";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import Tabs from "../../../Components/Tabs";
import Dropdown from "../../../Components/Dropdown";
const RowWrapper = styled(Grid)`
   grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
   min-height: ${toRem(37)};
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   border-bottom: 1px solid #edf2f9;
   & > *:nth-child(2),
   & > *:nth-child(3),
   & > *:nth-child(4),
   & > *:nth-child(5) {
      text-align: center;
      width: 100%;
   }
   & > *:nth-child(1) {
      padding-left: 2rem;
   }
   padding-left: 2rem;
   padding-right: 2rem;
   background-color: ${colors.headingBackground};
   cursor: pointer;
`;

const HeadingsRowWrapper = styled(RowWrapper)`
   & > *:nth-child(1) {
      padding-left: 0rem;
   }
   border-top: ${toRem(2)} solid ${colors.sidebarBackground};
   height: fit-content;
   overflow-y: scroll;
`;

const SubHeadingsRowWrapper = styled(RowWrapper)`
   ${Text} {
      font-size: ${toRem(12)};
   }
   & > *:nth-child(1) {
      padding-left: 0rem;
   }
   background: ${colors.companyCardBackground};
   border: none;
`;

interface RowProps {
   name: string;
}

interface RowGroupProps {
   title: string;
   rows: RowProps[];
}

const rows: RowProps[] = [...repeat({ name: "Team Name", members: "2" }, 6)];

const rowGroups: RowGroupProps[] = [
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Purchase" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Sales" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Others" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
   { rows: repeat({ name: "Some Item" }, 4), title: "Accounting - Statements" },
];

const Row: React.FC<RowProps> = ({ name }) => {
   return (
      <RowWrapper fullWidth>
         <Text>{name}</Text>
         <Checkbox disableRipple></Checkbox>
         <Checkbox disableRipple></Checkbox>
         <Checkbox disableRipple></Checkbox>
         <Checkbox disableRipple></Checkbox>
      </RowWrapper>
   );
};

const RowGroup: React.FC<RowGroupProps> = ({ rows, title }) => {
   return (
      <>
         <SubHeadingsRowWrapper fullWidth>
            <Text>{title}</Text>
            <Checkbox disableRipple></Checkbox>
            <Checkbox disableRipple></Checkbox>
            <Checkbox disableRipple></Checkbox>
            <Checkbox disableRipple></Checkbox>
         </SubHeadingsRowWrapper>
         {rows.map((row) => (
            <Row {...row}></Row>
         ))}
      </>
   );
};

interface PermissionUserProps {
   name: string;
}

const PermissionsUser: React.FC<PermissionUserProps> = ({ name }) => {
   return (
      <SettingsPageLayout navbarItems={["Settings", "Permissions", name]}>
         <Grid fullWidth style={{ overflow: "auto" }}>
            <Flexbox fullWidth justify="space-between" padding="0 2rem 1.25rem 2rem">
               <Text size={20} fontFamily="semibold">
                  {name}
               </Text>

               <Button variant="contained">
                  <Flexbox gap={10}>
                     <Text>Menu</Text>
                     <ArrowDropDownIcon />
                  </Flexbox>
               </Button>
            </Flexbox>

            <Flexbox column fullWidth overflowAuto>
               <HeadingsRowWrapper fullWidth>
                  <Text size={13}>Item</Text>
                  <Text size={13}>View</Text>
                  <Text size={13}>Edit</Text>
                  <Text size={13}>Create</Text>
                  <Text size={13}>Delete</Text>
               </HeadingsRowWrapper>
               <Flexbox column fullWidth overflowAuto>
                  {rowGroups.map((x) => (
                     <RowGroup {...x}></RowGroup>
                  ))}
               </Flexbox>
            </Flexbox>
         </Grid>
      </SettingsPageLayout>
   );
};
export default PermissionsUser;
