import styled from "styled-components";
import { colors, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { IconButton } from "@material-ui/core";

const IconsWrapper = styled(Flexbox)`
   border-left: 2px solid ${colors.sidebarBackground};
   padding-left: 1rem;
   padding-right: 0.5rem;
`;

const SubHeader: React.FC = () => {
   return (
      <Flexbox padding="0.75rem 0 0.75rem 2.5rem" justify="space-between" fullWidth>
         <Text size={20} fontFamily="semibold">
            Accounts Receivables
         </Text>
         <Flexbox gap={24}>
            <Flexbox gap={24}>
               <Text>Email</Text>
               <Text>Print</Text>
               <Text>Export</Text>
            </Flexbox>
            <IconsWrapper>
               <IconButton>
                  <SettingsOutlinedIcon></SettingsOutlinedIcon>
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon></SettingsOutlinedIcon>
               </IconButton>
            </IconsWrapper>
         </Flexbox>
      </Flexbox>
   );
};

export default SubHeader;
