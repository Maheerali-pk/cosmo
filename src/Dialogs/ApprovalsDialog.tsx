import { createTheme, MuiThemeProvider, Button, IconButton } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import ButtonGroupRadio from "../Components/ButtonGroupRadio";
import CustomInput from "../Components/CustomInput";
import CustomSelect from "../Components/CustomSelect";
import Dialog from "../Components/Dialog";
import { colors, commonStyles, fonts, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import RoundImage from "../StyledComponents/RoundImage";
import Text from "../StyledComponents/Text";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
const RowWrapper = styled(Grid)`
   grid-template-columns: ${toRem(100)} auto;
   width: 100%;
   align-items: center;
   row-gap: 0.4rem;
`;

interface IUserItem {
   image: string;
   name: string;
}

const IconWrapper = styled(IconButton)`
   height: ${toRem(24)} !important;
   width: ${toRem(24)} !important;
   padding: 0 !important;
`;
const UserItemWrapper = styled(Flexbox)`
   cursor: pointer;
   .delete-icon {
      display: none;
   }
   &:hover {
      .delete-icon {
         display: block;
      }
   }
`;

const UserItem: React.FC<IUserItem> = ({ image, name }) => {
   return (
      <UserItemWrapper fullWidth justify="space-between">
         <Flexbox gap={12}>
            <RoundImage src={image}></RoundImage>
            <Text>{name}</Text>
         </Flexbox>

         <DeleteIcon
            className="delete-icon"
            style={{ color: colors.sidebarBackground, cursor: "pointer" }}
         ></DeleteIcon>
      </UserItemWrapper>
   );
};

const AddNewButton = () => {
   return (
      <Flexbox gap={12}>
         <IconWrapper>
            <AddIcon></AddIcon>
         </IconWrapper>
         <Text>Add New Reviewer</Text>
      </Flexbox>
   );
};

const reviewers: IUserItem[] = [
   { name: "Shoaib Ali", image: "https://cdn.pixabay.com/photo/2014/07/09/10/04/man-388104_1280.jpg" },
];

const approvers: IUserItem[] = [
   {
      name: "User Name",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Pierre-Person.jpg/1200px-Pierre-Person.jpg",
   },
   {
      name: "User Name",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQK9gqFKRn28xKHD1CAbEevdzsLmsv5yQkGnQ&usqp=CAU",
   },
];
const ApprovalsDialog: React.FC = () => {
   const [reviewersMode, setReviewersMode] = useState("ALL");
   const [approversMode, setApproversMode] = useState("ALL");
   console.log("hello");
   return (
      <Dialog title="Approvals" dialogWidth={887}>
         <Text mb={20} size={13}>
            Kindly provide the details for reviews and approvals.
         </Text>
         <Grid fullWidth noOfColumns={2} mb={21}>
            {/* Left Section */}
            <Flexbox style={{ borderRight: "1px solid #F3F3F3" }} column pr={32} pb={32}>
               <Text mb={12} fontFamily="semibold">
                  Reviewers
               </Text>
               <Flexbox mb={16} gap={24}>
                  <Text color="graySubHeading">Mode</Text>
                  <ButtonGroupRadio
                     items={["ALL", "ANY"]}
                     onChange={setReviewersMode}
                     value={reviewersMode}
                  ></ButtonGroupRadio>
               </Flexbox>
               <Flexbox column gap={16} fullWidth>
                  {reviewers.map((x) => (
                     <UserItem {...x} />
                  ))}
                  <AddNewButton />
               </Flexbox>
            </Flexbox>

            {/* Right Section */}

            <Flexbox column pl={32} pb={32}>
               <Text mb={12} fontFamily="semibold">
                  Reviewers
               </Text>
               <Flexbox mb={16} gap={24}>
                  <Text color="graySubHeading">Mode</Text>
                  <ButtonGroupRadio
                     items={["ALL", "ANY"]}
                     onChange={setApproversMode}
                     value={approversMode}
                  ></ButtonGroupRadio>
               </Flexbox>
               <Flexbox column gap={16} fullWidth>
                  {approvers.map((x) => (
                     <UserItem {...x} />
                  ))}
                  <AddNewButton />
               </Flexbox>
            </Flexbox>

            {/* Bottom Section */}
         </Grid>
         <Flexbox column fullWidth>
            <Text size={13} fontFamily="semibold">
               Note
            </Text>
            <Text size={13}>
               ALL Mode requires approval/review of all mentioned personnel for that item to be completed.
            </Text>
            <Text size={13}>
               ANY Mode requires approval/review of any of the mentioned personnel for that item to be completed.
            </Text>
            <Flexbox mt={32} fullWidth justify="end">
               <Button color="secondary" variant="contained">
                  <Text fontFamily="semibold" color="white">
                     Save
                  </Text>
               </Button>
            </Flexbox>
         </Flexbox>
      </Dialog>
   );
};
export default ApprovalsDialog;
