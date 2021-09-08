import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";

interface CompanyCardProps {
   logoColor: string;
   logoText: string;
   text: string;
   dots: number;
   dotSize?: "small" | "larege";
   description: string;
}

const CardWrapper = styled(Flexbox)`
   background: ${colors.companyCardBackground};
   height: ${toRem(95)};
   width: ${toRem(286)};
`;

const LogoWrapper = styled(Flexbox)`
   height: ${toRem(26)};
   width: ${toRem(26)};
   min-width: ${toRem(26)};
   border-radius: 0.25rem;
`;

const Dot = styled.div`
   background: ${colors.grayShapes};
   height: 0.75rem;
   width: 0.75rem;
   border-radius: 50%;
`;

const CompanyCard: React.FC<CompanyCardProps> = ({ dots, logoColor, logoText, dotSize, text, description }) => {
   const renderDots = () => {
      return (
         <Flexbox gap={16}>
            {Array(dots)
               .fill(0)
               .map((x) => (
                  <Dot></Dot>
               ))}
         </Flexbox>
      );
   };
   return (
      <CardWrapper padding="1rem" justify="space-between" column>
         <Flexbox align="start" gap={11}>
            <LogoWrapper justify="center" style={{ backgroundColor: logoColor }}>
               <Text color="white">{logoText}</Text>
            </LogoWrapper>
            <Text fontFamily="semibold" size={15}>
               {text}
            </Text>
         </Flexbox>
         <Text size={14} fontFamily="semibold">
            {description}
         </Text>
         {/* {renderDots()} */}
      </CardWrapper>
   );
};

export default CompanyCard;
