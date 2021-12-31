import { Icon } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import { allIcons } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import RoundImage from "../../StyledComponents/RoundImage";
interface UserProfileRowProps {
   image: string;
   name: string;
   description: string;
}

const UserProfileRow: React.FC<UserProfileRowProps> = ({ description, image, name }) => {
   console.log("Hello world");
   return (
      <Flexbox fullWidth column padding="0rem 1rem 1rem 2rem">
         <Flexbox justify="end" fullWidth>
            <Icon>
               <CloseIcon></CloseIcon>
            </Icon>
         </Flexbox>
         <Flexbox gap={16}>
            <RoundImage src={image} size={52}></RoundImage>
            <Flexbox column>
               <Text fontFamily="semibold">{name}</Text>
               <Text color="graySelection">{description}</Text>
            </Flexbox>
         </Flexbox>
      </Flexbox>
   );
};

export default UserProfileRow;
