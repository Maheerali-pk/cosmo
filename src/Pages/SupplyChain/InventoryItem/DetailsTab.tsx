import styled from "styled-components";
import { colors, repeat, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";

import Tabs from "../../../Components/Tabs";
import UnderlinedHeading from "../../../StyledComponents/UnderlinedHeading";
import Grid from "../../../StyledComponents/Grid";
import Paragraph from "../../../StyledComponents/Paragraph";
import { IconButton } from "@material-ui/core";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

export interface TableProps {}

export interface RowProps {
   items: string[];
}

const DetailsTab: React.FC = () => {
   return (
      <Flexbox overflowAuto column padding="2rem 2rem" fullWidth>
         <UnderlinedHeading>About</UnderlinedHeading>
         <Grid noOfColumns={3} gap="2rem" fullWidth>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>

            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>

            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Heading</Text>
               <Text>Description</Text>
            </Paragraph>
         </Grid>
         <UnderlinedHeading mt={32}>Dimensions</UnderlinedHeading>
         <Grid noOfColumns={3} gap="2rem" fullWidth>
            <Paragraph>
               <Text>Pack Size</Text>
               <Text>10.00</Text>
            </Paragraph>

            <Paragraph>
               <Text>Weight - kg</Text>
               <Text>Description</Text>
            </Paragraph>

            <Paragraph>
               <Text>Width - m</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Height - m</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Depth - m</Text>
               <Text>Description</Text>
            </Paragraph>
            <Paragraph>
               <Text>Cubic Total - m</Text>
               <Text color="graySubHeading">0.00</Text>
            </Paragraph>
         </Grid>
         <UnderlinedHeading mt={32}>GL Configuration</UnderlinedHeading>
         <Grid noOfColumns={3} gap="2rem" fullWidth>
            <Paragraph>
               <Text>Stock in Trade</Text>
               <Text>123 - Stick in Trade</Text>
            </Paragraph>

            <Paragraph>
               <Text>Sales</Text>
               <Text>124 - Sales</Text>
            </Paragraph>
            <Paragraph>
               <Text>Discount</Text>
               <Text>125 - Discount</Text>
            </Paragraph>
            <Paragraph>
               <Text>Expense</Text>
               <Text>126 - Expense</Text>
            </Paragraph>
            <Paragraph>
               <Text>Sales Return</Text>
               <Text>127 - Sales Return</Text>
            </Paragraph>
            <Paragraph>
               <Text>Gain/Loss</Text>
               <Text>128 - Gain/Loss</Text>
            </Paragraph>
            <Paragraph>
               <Text>Depreciation</Text>
               <Text>129 - Depreciation</Text>
            </Paragraph>
            <Paragraph>
               <Text>Repair & Maintenance</Text>
               <Text>130 - Repair & Maintenance</Text>
            </Paragraph>
         </Grid>
      </Flexbox>
   );
};

export default DetailsTab;
