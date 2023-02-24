import styled from "styled-components";
import { colors, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Button, IconButton, Menu } from "@material-ui/core";
import PageSubHeaderWrapper from "../../../StyledComponents/PageSubHeaderWrapper";
import Dropdown from "../../../Components/Dropdown";
import {
   KeyboardArrowRight,
   QueryBuilder,
   CalendarToday,
   NotificationsNone,
   Email,
   Settings,
} from "@material-ui/icons";

const SubHeader: React.FC = () => {
   return (
      <PageSubHeaderWrapper>
         <Text size={20} fontFamily="semibold">
            Balance Sheet
         </Text>
         <Flexbox gap={24}>
            <Flexbox>
               <Text size={16}>ADCHEM CHINA</Text>
               <KeyboardArrowRight></KeyboardArrowRight>
            </Flexbox>

            <Flexbox>
               <IconButton>
                  <QueryBuilder></QueryBuilder>
               </IconButton>
               <IconButton>
                  <CalendarToday></CalendarToday>
               </IconButton>
               <IconButton>
                  <NotificationsNone></NotificationsNone>
               </IconButton>
               <IconButton>
                  <Email></Email>
               </IconButton>
               <IconButton>
                  <Settings></Settings>
               </IconButton>
            </Flexbox>
         </Flexbox>
      </PageSubHeaderWrapper>
   );
};

export default SubHeader;
