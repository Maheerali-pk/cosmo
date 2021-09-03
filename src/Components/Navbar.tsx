import Flexbox, { flexbox } from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import styled from "styled-components";
import { colors, interpolate, toRem } from "../Helpers/utils";
import Text, { text } from "../StyledComponents/Text";
export interface NavbarProps {
   headingItems: string[];
}

const UserImage = styled.img`
   border-radius: 50%;
   height: 2rem;
   aspect-ratio: 1/1;
   object-fit: cover;
`;

const NavbarWrapper = styled.div`
   width: 100%;
   height: fit-content;
   border-bottom: #f3f3f3;
   padding: 0.75rem;
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
      <NavbarWrapper>
         <Grid columns="20% 80%">
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
               <Flexbox gap={27}>
                  <i className="fas fa-search fa-lg"></i>
                  <i className="far fa-bell fa-lg"></i>
                  <i className="far fa-question-circle fa-lg"></i>
                  <UserImage
                     src={
                        "https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                     }
                  ></UserImage>
               </Flexbox>
            </Flexbox>
         </Grid>
      </NavbarWrapper>
   );
};

export default Navbar;
