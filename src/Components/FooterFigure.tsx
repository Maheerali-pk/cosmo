import styled from "styled-components";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";

const Wrapper = styled(Flexbox)`
   svg {
      color: #1d252c;
   }
   ${Text} {
      color: #1d252c !important;
      font-size: 12px;
   }
   cursor: pointer;
   gap: 0.5rem;
`;
interface FooterFigureProps {
   icon: React.ReactElement;
   text: string;
   onClick: () => void;
}

const FooterFigure: React.FC<FooterFigureProps> = ({ icon, onClick, text }) => {
   return (
      <Wrapper column onClick={onClick} align="center">
         {icon}
         <Text color="footerFigureText">{text}</Text>
      </Wrapper>
   );
};

export default FooterFigure;
