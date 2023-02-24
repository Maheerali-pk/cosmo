import Flexbox, { flexbox } from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import styled from "styled-components";
import { colors, interpolate, toRem } from "../Helpers/utils";
import Text, { text } from "../StyledComponents/Text";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { IconButton } from "@material-ui/core";
import {
   AccessTimeOutlined,
   CalendarTodayOutlined,
   EmailOutlined,
   MessageOutlined,
   Settings,
   SettingsOutlined,
} from "@material-ui/icons";
export interface NavbarProps {
   headingItems: string[];
}

const IconWrapper = styled(IconButton)`
   padding: 0.3rem !important;
`;

const UserImage = styled.img`
   border-radius: 50%;
   height: 1.75rem;
   aspect-ratio: 1/1;
   object-fit: cover;
`;

const NavbarWrapper = styled(Grid)`
   width: 100%;

   height: 2.5rem;
   border-bottom: 2px solid ${colors.pageOutlineSkyblue};
   padding: 0 0.75rem;
   align-items: center;
   i {
      color: ${colors.grayText};
   }
`;

const HeadingTextWrapper = styled.div`
   ${flexbox({ gap: 16 })};
   color: ${colors.grayText};

   & > *:nth-child(even) {
      color: ${colors.grayShapes};
   }
`;

const Logo = styled.div`
   ${text({ fontFamily: "myraid-pro" })};
   color: ${colors.indigoLogo};
   letter-spacing: ${toRem(3.2)};
`;

const Circle = styled.div`
   height: ${toRem(26)};
   width: ${toRem(26)};
   background-color: ${colors.grayShapes};
   border-radius: 50%;
`;

const Navbar: React.FC<NavbarProps> = ({ headingItems }) => {
   return (
      <NavbarWrapper columns={`${toRem(240)} auto`}>
         <Flexbox justify="start" gap={16}>
            <div>Tabs</div>
            {/* <Circle></Circle>
            <Logo>COSMO</Logo> */}
         </Flexbox>
         <Flexbox fullWidth justify="space-between">
            {/* <HeadingTextWrapper>
               {interpolate(headingItems, "/").map((item, i) => (
                  <Text breakcrumb={i % 2 === 0} fontFamily="semibold">
                     {item}
                  </Text>
               ))}
            </HeadingTextWrapper> */}
            <div></div>
            <Flexbox gap={16}>
               {/* <IconWrapper>
                  <SearchIcon fontSize="inherit"></SearchIcon>
               </IconWrapper>
               <IconWrapper>
                  <HelpOutlineOutlinedIcon fontSize="inherit"></HelpOutlineOutlinedIcon>
               </IconWrapper>
               <IconWrapper>
                  <UserImage
                     src={
                        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     }
                  ></UserImage>
               </IconWrapper> */}
               <IconWrapper>
                  <AccessTimeOutlined fontSize="small"></AccessTimeOutlined>
               </IconWrapper>
               <IconWrapper>
                  <CalendarTodayOutlined fontSize="small"></CalendarTodayOutlined>
               </IconWrapper>
               <IconWrapper>
                  <NotificationsNoneOutlinedIcon fontSize="inherit"></NotificationsNoneOutlinedIcon>
               </IconWrapper>
               <IconWrapper>
                  <EmailOutlined fontSize="small"></EmailOutlined>
               </IconWrapper>
               <IconWrapper>
                  <SettingsOutlined fontSize="small"></SettingsOutlined>
               </IconWrapper>
            </Flexbox>
         </Flexbox>
      </NavbarWrapper>
   );
};

export default Navbar;
