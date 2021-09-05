import styled from "styled-components";
import { colors, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { IconButton } from "@material-ui/core";
import PageSubHeaderWrapper from "../../StyledComponents/PageSubHeaderWrapper";

const IconsWrapper = styled(Flexbox)`
   border-left: 2px solid ${colors.sidebarBackground};
   padding-left: 1rem;
   padding-right: 0.5rem;
`;

const SubHeader: React.FC = () => {
   return (
      <PageSubHeaderWrapper>
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
                  <i className="fas fa-filter" />
               </IconButton>
               <IconButton>
                  <SettingsOutlinedIcon></SettingsOutlinedIcon>
               </IconButton>
            </IconsWrapper>
         </Flexbox>
      </PageSubHeaderWrapper>
   );
};

export default SubHeader;
