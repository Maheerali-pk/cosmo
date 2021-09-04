import Flexbox, { flexbox } from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import styled from "styled-components";
import { colors, interpolate, toRem } from "../Helpers/utils";
import Text, { text } from "../StyledComponents/Text";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import { IconButton } from "@material-ui/core";
export interface NavbarProps {
   headingItems: string[];
}

const UserImage = styled.img`
   border-radius: 50%;
   height: 1.75rem;
   aspect-ratio: 1/1;
   object-fit: cover;
`;

const NavbarWrapper = styled(Grid)`
   width: 100%;

   height: 6.5vh;
   border-bottom: 2px solid ${colors.pageOutlineSkyblue};
   padding: 0.25rem 0.75rem;
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
            <Circle></Circle>
            <Logo>COSMO</Logo>
         </Flexbox>
         <Flexbox fullWidth justify="space-between">
            <HeadingTextWrapper>
               {interpolate(headingItems, "/").map((item) => (
                  <Text fontFamily="semibold">{item}</Text>
               ))}
            </HeadingTextWrapper>
            <Flexbox>
               <IconButton>
                  <NotificationsNoneOutlinedIcon fontSize="inherit"></NotificationsNoneOutlinedIcon>
               </IconButton>
               <IconButton>
                  <SearchIcon fontSize="inherit"></SearchIcon>
               </IconButton>
               <IconButton>
                  <HelpOutlineOutlinedIcon fontSize="inherit"></HelpOutlineOutlinedIcon>
               </IconButton>
               <IconButton>
                  <UserImage
                     src={
                        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     }
                  ></UserImage>
               </IconButton>
            </Flexbox>
         </Flexbox>
      </NavbarWrapper>
   );
};

export default Navbar;
