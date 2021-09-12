import { Button, IconButton } from "@material-ui/core";
import styled from "styled-components";
import { colors, repeat, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
import Text from "../../../StyledComponents/Text";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import SettingsPageLayout from "../SettingsPageLayout";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Header = styled(Flexbox)`
   border-bottom: ${toRem(2)} solid ${colors.sidebarBackground};
`;
const LogoWrapper = styled(Flexbox)`
   border-radius: 0.25rem;
   background: #e1dfdf;
   height: ${toRem(52)};
   width: ${toRem(52)};
`;
const RowWrapper = styled(Grid)`
   grid-template-columns: 0.5fr 1.5fr 5fr 2fr 1.5fr 1fr;
   height: ${toRem(37)};
   ${Text} {
      font-size: ${toRem(13)};
   }
   align-items: center;
   border-bottom: 1px solid #edf2f9;
`;
const HeadinsRowWrapper = styled(RowWrapper)`
   ${Text} {
      font-size: ${toRem(12)};
   }
   background: ${colors.headingBackground};
   border: none;
`;

const IconWrapper = styled(IconButton)`
   padding: 0;
   height: fit-content;
   width: fit-content;
`;

const rows = [
   ...repeat(
      ["1", "Head Office", "15 CCA, Phase 8, EX-Air Avenue, 54000, Lahore, Pakistan", "Billing, Shipping", "Active"],
      1
   ),
];

const Footer = styled(Flexbox)`
   background: ${colors.headingBackground};
   height: ${toRem(51)};
`;

const EmptyRow = () => {
   return <RowWrapper fullWidth></RowWrapper>;
};

const Overview: React.FC = () => {
   return (
      <SettingsPageLayout>
         <Flexbox fullWidth column justify="space-between">
            <Flexbox column fullWidth>
               <Header gap={14} padding="1.25rem 2rem" fullWidth>
                  <LogoWrapper align="center" justify="center">
                     <Text size={20} fontFamily="semibold">
                        A
                     </Text>{" "}
                  </LogoWrapper>
                  <Flexbox column justify="center">
                     <Text fontFamily="semibold">Airmed</Text>
                     <Text color="graySelection">Pakistan</Text>
                  </Flexbox>
               </Header>
               <Flexbox fullWidth padding="2rem" column>
                  <UnderlinedHeading>About</UnderlinedHeading>
                  <Grid gap="2rem" fullWidth mt={20} mb={32} noOfColumns={3}>
                     <Paragraph>
                        <Text>Title</Text>
                        <Text>Airmed</Text>
                     </Paragraph>
                     <Paragraph>
                        <Text>Office Number</Text>
                        <Text>00924237891234</Text>
                     </Paragraph>
                     <Paragraph>
                        <Text>Office Email</Text>
                        <Text>info@airmed.com</Text>
                     </Paragraph>
                     <Paragraph>
                        <Text>Base Currenccy</Text>
                        <Text>PKR - Pakistani Rupees</Text>
                     </Paragraph>
                     <Paragraph>
                        <Text>Work Week</Text>
                        <Text>Monday - Friday</Text>
                     </Paragraph>
                     <Paragraph>
                        <Text>Language</Text>
                        <Text>English</Text>
                     </Paragraph>
                  </Grid>
                  <UnderlinedHeading>Branches</UnderlinedHeading>
                  <Flexbox mb={20} column fullWidth>
                     <RowWrapper fullWidth>
                        <Text>Sr</Text>
                        <Text>Title</Text>
                        <Text>Address</Text>
                        <Text>Type</Text>
                        <Text>Status</Text>
                        <div></div>
                     </RowWrapper>
                     {rows.map((row) => (
                        <RowWrapper fullWidth>
                           {row.map((x: string) => (
                              <Text>{x}</Text>
                           ))}
                           <IconWrapper style={{ padding: "0" }}>
                              <MoreHorizIcon></MoreHorizIcon>
                           </IconWrapper>
                        </RowWrapper>
                     ))}
                     <EmptyRow></EmptyRow>
                     <EmptyRow></EmptyRow>
                  </Flexbox>
                  <Text cursorPointer underline size={13}>
                     Add Branch
                  </Text>
               </Flexbox>
            </Flexbox>
            <Footer pr={16} fullWidth justify="end">
               <Button variant="contained">Save</Button>
            </Footer>
         </Flexbox>
      </SettingsPageLayout>
   );
};
export default Overview;
