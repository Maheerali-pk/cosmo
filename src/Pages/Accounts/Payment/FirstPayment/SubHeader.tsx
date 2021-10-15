import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../../StyledComponents/Flexbox";
import Text from "../../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../../Components/PageContentHeader";
import Layout from "../../../../Components/Layout";
import TableRowCollapse from "../../../../Components/TableRowCollapse";
import { Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../../Components/Tabs";
import { useGlobalContext } from "../../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../../Dialogs/NewInvoiceDialog";
import { Stages } from "../../../../Components/Stages";
export interface AccountRecieveablesProps {}

const SubHeader: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Flexbox pl={32} pr={52} fullWidth justify="space-between">
         <Flexbox>
            <Text fontFamily="semibold" mr={12}>
               135
            </Text>
            <Text fontFamily="semibold">First Payment</Text>
         </Flexbox>
         <Flexbox align="start">
            <Text size={20} fontFamily="semibold">
               400,000
            </Text>
            <Text size={13} fontFamily="semibold" ml={12}>
               PKR
            </Text>
         </Flexbox>
      </Flexbox>
   );
};

export default SubHeader;
