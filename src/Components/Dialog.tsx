import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
const DialogWrapper = styled(Flexbox)`
   background-color: white;
   box-shadow: 0 0 0 5000px #ababab2f, 0px 0px ${toRem(20)} #00000029;
   color: white;
   width: ${toRem(550)};
   position: absolute;
   top: ${toRem(40)};
   left: 50%;
   transform: translate(-50%, 0);
`;

const HeaderWrapper = styled(Flexbox)`
   border-bottom: 2px solid ${colors.tableFooterHrColor};
`;

interface DialogProps {
   title: string;
   dialogWidth?: number;
}

const Dialog: React.FC<DialogProps> = ({ title, children, dialogWidth }) => {
   const [_, dispatch] = useGlobalContext();
   return (
      <DialogWrapper style={{ width: toRem(dialogWidth || 550) }} column>
         <HeaderWrapper padding="1.25rem 2rem" fullWidth justify="space-between">
            <Text fontFamily="semibold">{title}</Text>
            <IconButton onClick={() => dispatch({ setDialog: undefined })} style={{ padding: 0 }}>
               <CloseIcon></CloseIcon>
            </IconButton>
         </HeaderWrapper>
         <Flexbox fullWidth column padding="1.25rem 2rem">
            {children}
         </Flexbox>
      </DialogWrapper>
   );
};
export default Dialog;
