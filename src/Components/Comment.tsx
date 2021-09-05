import styled from "styled-components";
import { IUser } from "../Contexts/GlobalContext/GlobalContext";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";

interface IComment {
   user: IUser;
   text: string;
   time: string;
   repliedUser?: string;
}

const UserTag = styled.div`
   background-color: ${colors.tableFooterHrColor};
   font-size: ${toRem(13)};
`;
const UserImage = styled.img`
   height: ${toRem(24)};
   width: ${toRem(24)};
   border-radius: 50%;
   object-fit: cover;
`;

const Comment: React.FC<IComment> = ({ text, user: { image, name }, time, repliedUser }) => {
   return (
      <Flexbox gap={10} mt={20}>
         <UserImage src={image} />
         <Flexbox column fullWidth>
            <Flexbox gap={24} fullWidth>
               <Text size={13} fontFamily="semibold">
                  {name}
               </Text>
               <Text size={13}>{time}</Text>
               <Flexbox gap={8}>
                  <Text size={13} color="graySubHeading">
                     Edit
                  </Text>
                  <Text size={13} color="graySubHeading">
                     Delete
                  </Text>
               </Flexbox>
            </Flexbox>
            <Flexbox>
               <UserTag>@ {repliedUser}</UserTag>
               <Text size={13}>&nbsp;{" " + text}</Text>
            </Flexbox>
         </Flexbox>
      </Flexbox>
   );
};
export default Comment;
