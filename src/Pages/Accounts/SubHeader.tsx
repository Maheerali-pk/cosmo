import styled from "styled-components";
import { colors, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Button, IconButton, Menu } from "@material-ui/core";
import PageSubHeaderWrapper from "../../StyledComponents/PageSubHeaderWrapper";
import Dropdown from "../../Components/Dropdown";

const IconsWrapper = styled(Flexbox)`
   border-left: 2px solid ${colors.sidebarBackground};
   padding-left: 1rem;
   padding-right: 0.5rem;
`;
const SubHeader: React.FC = () => {
   return (
      <PageSubHeaderWrapper>
         <Text size={20} fontFamily="semibold">
            General Journal
         </Text>
         <Flexbox gap={24}>
            <Flexbox gap={24}>
               <Button variant="contained">New</Button>
               <Text>Email</Text>
               <Text>Print</Text>
               <Dropdown
                  label="Export"
                  items={[
                     { text: "Option 1", onClick: () => {} },
                     { text: "Option 2", onClick: () => {} },
                  ]}
               ></Dropdown>
            </Flexbox>
            <IconsWrapper>
               <IconButton>
                  <SettingsOutlinedIcon></SettingsOutlinedIcon>
               </IconButton>
            </IconsWrapper>
         </Flexbox>
      </PageSubHeaderWrapper>
   );
};

export default SubHeader;
