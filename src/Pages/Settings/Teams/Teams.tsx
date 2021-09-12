import { Button, IconButton, Icon } from "@material-ui/core";
import styled from "styled-components";
import { colors, repeat, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
import Text from "../../../StyledComponents/Text";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import SettingsPageLayout from "../SettingsPageLayout";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ButtonPrimary from "../../../StyledComponents/ButtonPrimary";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = styled(Flexbox)`
   border-bottom: ${toRem(2)} solid ${colors.sidebarBackground};
`;
const LogoWrapper = styled(Flexbox)`
   border-radius: 0.25rem;
   background: #e1dfdf;
   height: ${toRem(52)};
   width: ${toRem(52)};
`;
const RowWrapper = styled(Grid)`
   grid-template-columns: 0.5fr 4fr 1fr 2.5fr 0.5fr;
   height: ${toRem(37)};
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   border-bottom: 1px solid #edf2f9;
   & > *:nth-child(3),
   & > *:nth-child(4) {
      text-align: center;
   }
`;
const HeadingsRowWrapper = styled(RowWrapper)`
   ${Text} {
      font-size: ${toRem(12)};
   }
   background: ${colors.headingBackground};
   border: none;
`;

const IconWrapper = styled(IconButton)`
   padding: 0 !important;
   height: fit-content;
   width: fit-content;
`;

const Footer = styled(Flexbox)`
   background: ${colors.headingBackground};
   height: ${toRem(51)};
`;

interface RowProps {
   showIcon?: boolean;
   name: string;
   members: string;
   status: string;
}

const rows: RowProps[] = [
   { showIcon: true, name: "Super Admin", members: "1", status: "Active" },
   { showIcon: true, name: "Admin", members: "2", status: "Active" },
   ...repeat({ showIcon: false, name: "Team Name", members: "2", status: "Active" }, 6),
];

const Row: React.FC<RowProps> = ({ members, name, showIcon, status }) => {
   return (
      <RowWrapper fullWidth>
         <div style={{ textAlign: "center" }}>{showIcon && <LockOutlinedIcon fontSize="small"></LockOutlinedIcon>}</div>
         <Text>{name}</Text>
         <Text>{members}</Text>
         <Text>{status}</Text>
         <IconWrapper>
            <MoreHorizIcon></MoreHorizIcon>
         </IconWrapper>
      </RowWrapper>
   );
};

const Teams: React.FC = () => {
   return (
      <SettingsPageLayout>
         <Flexbox column fullWidth>
            <Flexbox fullWidth justify="space-between" padding="0 2rem 1.25rem 2rem">
               <Text size={20} fontFamily="semibold">
                  Teams
               </Text>
               <Flexbox gap={32}>
                  <Button variant="contained" color="secondary">
                     <Flexbox gap={15}>
                        <PersonAddIcon style={{ color: "white" }} />
                        <Text color="white">Invite New Member</Text>
                        <ArrowDropDownIcon style={{ color: "white" }} />
                     </Flexbox>
                  </Button>
                  <Button variant="contained">
                     <Flexbox gap={10}>
                        <Text>Menu</Text>
                        <ArrowDropDownIcon />
                     </Flexbox>
                  </Button>
               </Flexbox>
            </Flexbox>
            <Flexbox column fullWidth>
               <HeadingsRowWrapper fullWidth>
                  <div></div>
                  <Text size={13}>Name</Text>
                  <Text size={13}>Members</Text>
                  <Text size={13}>Status</Text>
                  <div></div>
               </HeadingsRowWrapper>
               {rows.map((x) => (
                  <Row {...x}></Row>
               ))}
            </Flexbox>
         </Flexbox>
      </SettingsPageLayout>
   );
};
export default Teams;
