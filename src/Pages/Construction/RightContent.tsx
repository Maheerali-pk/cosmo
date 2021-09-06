import { Button } from "@material-ui/core";
import { allIcons } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import Grid from "../../StyledComponents/Grid";
import Paragraph from "../../StyledComponents/Paragraph";
import Text from "../../StyledComponents/Text";
import UnderlinedHeading from "../../StyledComponents/UnderlinedHeading";

interface ListItemProps {
   icon: string;
   number: number;
   text: string;
}

const ListItem: React.FC<ListItemProps> = ({ icon, number, text }) => {
   return (
      <Flexbox justify="space-between" fullWidth mb={6}>
         <Flexbox gap={9}>
            <img src={icon}></img>
            <Text size={13}>{number}</Text>
            <Text size={13}>{text}</Text>
         </Flexbox>
         <Text size={13}>X</Text>
      </Flexbox>
   );
};
const childItems: ListItemProps[] = [
   { icon: allIcons.tick, number: 24, text: "Main Structure" },
   { icon: allIcons.tick, number: 26, text: "Zonal Layout" },
   { icon: allIcons.tick, number: 29, text: "Electrical Structure" },
];

const relatedItems: ListItemProps[] = [{ icon: allIcons.noun, number: 29, text: "Wiring" }];

const RightContent: React.FC = () => {
   return (
      <Flexbox column fullWidth>
         <UnderlinedHeading>Details</UnderlinedHeading>
         <Paragraph mb={20}>
            <Text>Assigned To</Text>
            <Text>Muhammad Ali</Text>
         </Paragraph>
         <Paragraph mb={20}>
            <Text>State</Text>
            <Text>In Progress</Text>
         </Paragraph>
         <Paragraph mb={20}>
            <Text>Priority</Text>
            <Text>Medium</Text>
         </Paragraph>
         <Paragraph mb={20}>
            <Text>Risk</Text>
            <Text>1 - Low</Text>
         </Paragraph>
         <UnderlinedHeading>Time Tracking - Hrs</UnderlinedHeading>
         <Grid mb={40} noOfColumns={3} fullWidth minHeight>
            <Paragraph>
               <Text>Planned</Text>
               <Text>24</Text>
            </Paragraph>
            <Paragraph>
               <Text>Completed</Text>
               <Text>12</Text>
            </Paragraph>
            <Paragraph>
               <Text>Remaining</Text>
               <Text>12</Text>
            </Paragraph>
         </Grid>
         <UnderlinedHeading justify="space-between" fullWidth>
            <Text size={13}>Related</Text>
            <Text size={13}>Add Link</Text>
         </UnderlinedHeading>
         <Text size={13} color="graySubHeading" mb={8}>
            Child
         </Text>
         <Flexbox column mb={20} fullWidth>
            {childItems.map((x) => (
               <ListItem {...x}></ListItem>
            ))}
         </Flexbox>
         <Text size={13} color="graySubHeading" mb={8}>
            Related
         </Text>
         {relatedItems.map((x) => (
            <ListItem {...x}></ListItem>
         ))}
         <Flexbox justify="end" fullWidth mt={42}>
            <Button variant="contained">Save</Button>
         </Flexbox>
      </Flexbox>
   );
};

export default RightContent;
