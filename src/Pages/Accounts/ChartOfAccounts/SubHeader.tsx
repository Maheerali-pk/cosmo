import styled from "styled-components";
import { colors, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Button, IconButton, Menu } from "@material-ui/core";
import PageSubHeaderWrapper from "../../../StyledComponents/PageSubHeaderWrapper";
import Dropdown from "../../../Components/Dropdown";

const IconsWrapper = styled(Flexbox)`
   border-left: 2px solid ${colors.sidebarBackground};
   padding-left: 1rem;
   padding-right: 0.5rem;
`;
const SubHeader: React.FC = () => {
   return (
      <PageSubHeaderWrapper>
         <Text size={20} fontFamily="semibold">
            Chart of Accounts
         </Text>
         <Flexbox gap={24}>
            <Button>
               <Text>Expand All</Text>
            </Button>
            <Dropdown
               label="Actions"
               items={[
                  { text: "Option 1", onClick: () => {} },
                  { text: "Option 2", onClick: () => {} },
               ]}
            ></Dropdown>
            <Dropdown
               label="Statements"
               items={[
                  { text: "Option 1", onClick: () => {} },
                  { text: "Option 2", onClick: () => {} },
               ]}
            ></Dropdown>
         </Flexbox>
      </PageSubHeaderWrapper>
   );
};

export default SubHeader;
