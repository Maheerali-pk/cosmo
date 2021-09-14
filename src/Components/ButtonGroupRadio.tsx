import { Button } from "@material-ui/core";
import styled from "styled-components";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";

interface ButtonGroupRadioProps {
   items: string[];
   value: string;
   onChange: (x: string) => void;
}

const ButtonGroupWrapper = styled(Flexbox)`
   border-radius: 0.25rem;
   overflow: hidden;
`;

const ButtonGroupRadio: React.FC<ButtonGroupRadioProps> = ({ items, onChange, value }) => {
   return (
      <ButtonGroupWrapper>
         {items.map((item) => (
            <Button
               color={item === value ? "secondary" : "default"}
               variant="contained"
               style={{ padding: "0.25rem 2.25rem", borderRadius: "none" }}
               onClick={() => onChange(item)}
            >
               <Text color="inherit">{item}</Text>
            </Button>
         ))}
      </ButtonGroupWrapper>
   );
};
export default ButtonGroupRadio;
