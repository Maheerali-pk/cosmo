import styled from "styled-components";
import { toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import Grid from "../../../StyledComponents/Grid";
import { Line2 } from "./Header";
import { Phone, Mail, LocationOn } from "@material-ui/icons";
import { Icon, SvgIconTypeMap } from "@material-ui/core";
import { OverridableComponent } from "@material-ui/core/OverridableComponent";
import { Report1Props } from "./Report1";

interface IFooterItem {
   text: string;
   icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>;
}
const footerItems: IFooterItem[] = [
   { text: "+92 321 1234567", icon: Phone },
   { text: "+92 321 1234567", icon: Mail },
   { text: "+92 321 1234567", icon: LocationOn },
];

const Footer: React.FC<Report1Props> = (props) => {
   return (
      <Flexbox column fullWidth justify="end" mb={11} em>
         <Flexbox column mt={10} em fullWidth px={50}>
            <Grid columns="1.5fr 1fr" fullWidth mb={9} em>
               <Flexbox column em pl={28} fullWidth>
                  <Text em size={11} style={{ borderBottom: "1px solid black" }}>
                     Prepared By :
                  </Text>
                  <Text size={11}>{props.preparedBy}</Text>
               </Flexbox>
               <Flexbox column em fullWidth>
                  <Text em size={11} style={{ borderBottom: "1px solid black" }}>
                     Approved By :
                  </Text>
               </Flexbox>
            </Grid>
            <Flexbox justify="space-between" fullWidth em pr={20} pl={10}>
               <Text size={11} em>
                  This is a computer generated document and electronically approved.
               </Text>
               <Text size={11} em style={{ borderBottom: "0.1em solid black" }}>
                  Page 1 of 1
               </Text>
            </Flexbox>
         </Flexbox>
         <Flexbox em column gap={4} px={24} pt={16} fullWidth align="center">
            <Line2></Line2>
            <Flexbox em mt={13} mb={5} fullWidth justify="center">
               <Text em color="black" fontFamily="bold" size={26}>
                  COMPANY NAME
               </Text>
            </Flexbox>
            <Flexbox em justify="around" fullWidth>
               {footerItems.map((item) => (
                  <Flexbox em gap={8.25}>
                     <item.icon style={{ color: "black", fontSize: "0.8em" }}></item.icon>
                     <Text em color="black" fontFamily="bold" size={11}>
                        {item.text}
                     </Text>
                  </Flexbox>
               ))}
            </Flexbox>
         </Flexbox>
      </Flexbox>
   );
};

export default Footer;
