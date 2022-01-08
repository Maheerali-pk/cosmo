import { Button } from "@material-ui/core";
import { CSSProperties } from "react";
import styled from "styled-components";
import { toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";

type ButtonSize = "small" | "medium";

interface ButtonGroupRadioProps {
   items: string[];
   value: string;
   onChange: (x: string) => void;
   size?: ButtonSize;
   buttonStyles?: CSSProperties;
}

const ButtonGroupWrapper = styled(Flexbox)`
   border-radius: 0.25rem;
   overflow: hidden;
`;

const ButtonSizeObject: { [k in ButtonSize]: { padding: string; textSize: number } } = {
   small: { padding: "0.25rem 1.5rem", textSize: 13 },
   medium: { padding: "0.25rem 2.25rem", textSize: 16 },
};

const ButtonGroupRadio: React.FC<ButtonGroupRadioProps> = ({
   items,
   size = "medium",
   onChange,
   value,
   buttonStyles,
}) => {
   const sizeObject = ButtonSizeObject[size];
   return (
      <ButtonGroupWrapper>
         {items.map((item) => (
            <Button
               color={item === value ? "secondary" : "default"}
               variant="contained"
               style={{ padding: sizeObject.padding, borderRadius: "none", ...buttonStyles }}
               onClick={() => onChange(item)}
            >
               <Text color="inherit" size={sizeObject.textSize}>
                  {item}
               </Text>
            </Button>
         ))}
      </ButtonGroupWrapper>
   );
};
export default ButtonGroupRadio;
