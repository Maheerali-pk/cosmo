import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox, { flexbox } from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";

interface LoggedOutLayout {
   background: string;
   image: string;
}

const FormCard = styled(Flexbox)`
   width: 50%;
   box-shadow: 0px 0px 12px 0px #00000029;
   background: white;
`;

const PageWrapper = styled(Flexbox)`
   height: 100%;
`;

const LogoWrapper = styled(Flexbox)`
   border-top: 2px solid ${colors.sidebarBackground};
   position: absolute;
   bottom: 0;
   left: 50%;
   transform: translate(-50%, 0);
`;

const Circle = styled.div`
   background: ${colors.grayShapes};
   height: 2rem;
   width: 2rem;
   border-radius: 50%;
`;

const CornerImage = styled.img`
   height: ${toRem(327)};
   width: ${toRem(436)};
   position: absolute;
   right: 0;
   bottom: 0;
`;

const LoggedOutLayout: React.FC<LoggedOutLayout> = ({ background, image, children }) => {
   return (
      <PageWrapper style={{ background }} align="start" justify="center" fullWidth>
         <FormCard pt={40} pb={52} pl={120} pr={120} column align="center" mt={80}>
            {children}
         </FormCard>
         <LogoWrapper pt={24} pb={40} pl={40} pr={40} gap={24}>
            <Circle></Circle>
            <Text color="indigoLogo" size={32} style={{ letterSpacing: "0.2rem" }}>
               COSMO
            </Text>
         </LogoWrapper>
         <CornerImage src={image}></CornerImage>
      </PageWrapper>
   );
};
export default LoggedOutLayout;
