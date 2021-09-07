import { createTheme, MuiThemeProvider } from "@material-ui/core";
import styled from "styled-components";
import { colors, fonts, toRem } from "../Helpers/utils";
import Flexbox, { flexbox } from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";

interface LoggedOutLayout {
   background: string;
   image: string;
   showBackToLogin?: boolean;
}

const FormCard = styled(Flexbox)`
   width: ${toRem(810)};
   box-shadow: 0px 0px 12px 0px #00000029;
   background: white;
   position: relative;
   .back-to-login {
      position: absolute;
      top: 2rem;
      left: 2.5rem;
   }
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
   width: ${toRem(436)};

   position: absolute;
   right: 0;
   bottom: 0;
`;
const theme = createTheme({
   overrides: {
      MuiTextField: {
         root: {
            borderBottom: `${toRem(3)} solid #A4A4A4`,
            marginBottom: toRem(40),
         },
      },
      MuiInputBase: {
         root: {
            fontFamily: fonts.semibold,
            color: colors.grayText,
         },
      },
   },
});
const LoggedOutLayout: React.FC<LoggedOutLayout> = ({ background, image, children, showBackToLogin }) => {
   return (
      <MuiThemeProvider theme={theme}>
         <PageWrapper style={{ background }} align="start" justify="center" fullWidth>
            <FormCard pt={showBackToLogin ? 72 : 40} pb={52} pl={120} pr={120} column align="center" mt={80}>
               {children}
               {showBackToLogin && (
                  <Text fontFamily="semibold" size={20} className="back-to-login" cursorPointer>
                     {"<Back to Log in"}
                  </Text>
               )}
            </FormCard>
            <LogoWrapper pt={24} pb={40} pl={40} pr={40} gap={24}>
               <Circle></Circle>
               <Text color="indigoLogo" size={32} style={{ letterSpacing: "0.2rem" }}>
                  COSMO
               </Text>
            </LogoWrapper>
            <CornerImage src={image}></CornerImage>
         </PageWrapper>
      </MuiThemeProvider>
   );
};
export default LoggedOutLayout;
