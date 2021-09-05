import { allIcons, colors } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import PageSubHeaderWrapper from "../../StyledComponents/PageSubHeaderWrapper";
import Text from "../../StyledComponents/Text";
import CloseIcon from "@material-ui/icons/Close";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import HistoryIcon from "@material-ui/icons/History";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { IconButton } from "@material-ui/core";
const SubHeader: React.FC = () => {
   return (
      <PageSubHeaderWrapper style={{ borderBottom: `2px solid ${colors.tableFooterHrColor}` }}>
         <Flexbox fullWidth justify="space-between">
            <Flexbox gap={10}>
               <img src={allIcons.starPurple} />
               <Text size={11} color="indigoDark">
                  Feature
               </Text>
            </Flexbox>
            <Text>
               <CloseIcon />
            </Text>
         </Flexbox>
         <Flexbox justify="space-between" fullWidth>
            <Flexbox gap={16}>
               <Text>126</Text>
               <Text>Construction</Text>
            </Flexbox>
            <Flexbox>
               <IconButton>
                  <AttachFileIcon fontSize="small" />
               </IconButton>
               <IconButton>
                  <HistoryIcon fontSize="small" />
               </IconButton>
               <IconButton>
                  <MoreHorizIcon fontSize="small" />
               </IconButton>
            </Flexbox>
         </Flexbox>
      </PageSubHeaderWrapper>
   );
};

export default SubHeader;
