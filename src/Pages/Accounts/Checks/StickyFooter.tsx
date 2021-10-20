import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
// import Table from "./Table";
import { Button, ButtonGroup, Icon, IconButton } from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/KeyboardArrowRight";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
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
            <Button variant="contained">Following</Button>
            <ButtonGroup variant="contained">
               <Button>Export</Button>
               <Button style={{ padding: "0", minWidth: "fit-content" }}>
                  <ArrowDropDownIcon></ArrowDropDownIcon>
               </Button>
            </ButtonGroup>
         </Flexbox>
         <Flexbox gap={16} color="secondary">
            <Button variant="contained" color="secondary" style={{ width: toRem(130) }}>
               Save
            </Button>
            <Button variant="contained" style={{ width: toRem(130) }}>
               Complete
            </Button>
         </Flexbox>
      </Wrapper>
   );
};

export default StickyFooter;
