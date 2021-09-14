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
import ApprovalsDialog from "../../../Dialogs/ApprovalsDialog";
import { useState } from "react";
const RowWrapper = styled(Grid)`
   grid-template-columns: 1.5fr 1fr 1fr;
   min-height: ${toRem(37)};
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   border-bottom: 1px solid #edf2f9;
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
   reviewer: string;
   approver: string;
}

interface RowGroupProps {
   title: string;
   rows: RowProps[];
}

const rows: RowProps[] = [...repeat({ name: "Team Name", reviewer: "Reviewer 1", approver: "Approver 1" }, 3)];

const rowGroups: RowGroupProps[] = [
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Accounting - Purchase",
   },
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Accounting - Sales",
   },
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Supply Chain - Purchase",
   },
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Supply Chain - Sale",
   },
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Supply Chain - Sale",
   },
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Supply Chain - Sale",
   },
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Supply Chain - Sale",
   },
   {
      rows: repeat({ name: "Some Item", reviewer: "Reviewer 1", approver: "Approver 1" }, 4),
      title: "Supply Chain - Sale",
   },
];

const Row: React.FC<RowProps> = ({ name, approver, reviewer }) => {
   const [_, dispatch] = useGlobalContext();
   return (
      <RowWrapper onClick={() => dispatch({ setDialog: ApprovalsDialog })} fullWidth>
         <Text>{name}</Text>
         <Text>{reviewer}</Text>
         <Text>{approver}</Text>
      </RowWrapper>
   );
};

const RowGroup: React.FC<RowGroupProps> = ({ rows, title }) => {
   return (
      <>
         <SubHeadingsRowWrapper fullWidth>
            <Text>{title}</Text>
            <div></div>
            <div></div>
         </SubHeadingsRowWrapper>
         {rows.map((row) => (
            <Row {...row}></Row>
         ))}
      </>
   );
};

const Approvals: React.FC = () => {
   return (
      <SettingsPageLayout navbarItems={["Settings", "Approvals"]}>
         <Flexbox column fullWidth style={{ overflow: "auto" }}>
            <Flexbox fullWidth justify="space-between" padding="0 2rem 1.25rem 2rem">
               <Text size={20} fontFamily="semibold">
                  Approvals
               </Text>

               <Button variant="contained">
                  <Flexbox gap={10}>
                     <Text>Menu</Text>
                     <ArrowDropDownIcon />
                  </Flexbox>
               </Button>
            </Flexbox>

            <Flexbox style={{ overflow: "auto" }} column fullWidth>
               <HeadingsRowWrapper fullWidth>
                  <Text size={13}>Item</Text>
                  <Text size={13}>Reviewers</Text>
                  <Text size={13}>Approvers</Text>
               </HeadingsRowWrapper>
               {rowGroups.map((x) => (
                  <RowGroup {...x}></RowGroup>
               ))}
            </Flexbox>
         </Flexbox>
      </SettingsPageLayout>
   );
};
export default Approvals;
