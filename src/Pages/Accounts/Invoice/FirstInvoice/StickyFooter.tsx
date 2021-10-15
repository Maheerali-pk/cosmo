import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../../StyledComponents/Flexbox";
import Text from "../../../../StyledComponents/Text";
import FileCopyIcon from "@material-ui/icons/FileCopy";
// import Table from "./Table";
import PageContentHeader from "../../../../Components/PageContentHeader";
import Layout from "../../../../Components/Layout";
import TableRowCollapse from "../../../../Components/TableRowCollapse";
import { Button, ButtonGroup, Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import PageSubHeaderWrapper from "../../../../StyledComponents/PageSubHeaderWrapper";
import Tabs from "../../../../Components/Tabs";
import { useGlobalContext } from "../../../../Contexts/GlobalContext/GlobalContext";
import NewInvoiceDialog from "../../../../Dialogs/NewInvoiceDialog";
import { Stages } from "../../../../Components/Stages";
import SelectsRow from "./SelectsRow";
import Content from "./Content";
import List from "./List";
import SettingsIcon from "@material-ui/icons/Settings";
import Footer from "./Footer";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
export interface AccountRecieveablesProps {}
const Wrapper = styled(Flexbox)`
   position: fixed;
   bottom: 0;
   right: 0;
   width: calc(100% - 15rem);
   background: ${colors.headingBackground};
`;
const StickyFooter: React.FC<AccountRecieveablesProps> = () => {
   const [state, dispatch] = useGlobalContext();
   return (
      <Wrapper padding="0.75rem 1rem" fullWidth justify="space-between">
         <Flexbox gap="2rem">
            <ButtonGroup variant="contained" color="secondary">
               <Button>Following</Button>
               <Button style={{ padding: "0", minWidth: "fit-content" }}>
                  <ArrowDropDownIcon style={{ color: "white" }}></ArrowDropDownIcon>
               </Button>
            </ButtonGroup>
            <ButtonGroup variant="contained">
               <Button>Export</Button>
               <Button style={{ padding: "0", minWidth: "fit-content" }}>
                  <ArrowDropDownIcon></ArrowDropDownIcon>
               </Button>
            </ButtonGroup>
         </Flexbox>
         <ButtonGroup variant="contained">
            <Button style={{ paddingLeft: "3rem", paddingRight: "3rem" }}>Save</Button>
            <Button style={{ padding: "0", minWidth: "fit-content" }}>
               <ArrowDropDownIcon></ArrowDropDownIcon>
            </Button>
         </ButtonGroup>
      </Wrapper>
   );
};

export default StickyFooter;
