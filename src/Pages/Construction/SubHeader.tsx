import { allIcons, colors } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import PageSubHeaderWrapper from "../../StyledComponents/PageSubHeaderWrapper";
import Text from "../../StyledComponents/Text";
import CloseIcon from "@material-ui/icons/Close";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";
const CustomIconButton = styled(IconButton)`
   padding: 0.5rem !important;
`;

const SubHeader: React.FC = () => {
   return (
      <PageSubHeaderWrapper column style={{ borderBottom: `2px solid ${colors.tableFooterHrColor}` }}>
         <Flexbox fullWidth justify="space-between">
            <Flexbox gap={10}>
               <img src={allIcons.starPurple} />
               <Text size={11} color="indigoDark">
                  Feature
               </Text>
            </Flexbox>
            <IconButton style={{ padding: 0 }}>
               <CloseIcon fontSize="small" />
            </IconButton>
         </Flexbox>
         <Flexbox justify="space-between" fullWidth>
            <Flexbox gap={16}>
               <Text>126</Text>
               <Text>Construction</Text>
            </Flexbox>
            <Flexbox>
               <CustomIconButton>
                  <AttachFileIcon fontSize="small" />
               </CustomIconButton>
               <CustomIconButton>
                  <HistoryIcon fontSize="small" />
               </CustomIconButton>
               <CustomIconButton>
                  <MoreHorizIcon fontSize="small" />
               </CustomIconButton>
            </Flexbox>
         </Flexbox>
      </PageSubHeaderWrapper>
   );
};

export default SubHeader;
