import styled, { css } from "styled-components";
import { colors, toRem } from "../Helpers/utils";

type FontFamilyKey = "regular" | "semibold" | "myraid-pro";

interface TextProps {
   size?: number;
   fontFamily?: FontFamilyKey;
   color?: keyof typeof colors;
}
console.log("hello");
const fontFamilyObject: { [k in FontFamilyKey]: string } = {
   "myraid-pro": "myraid-pro",
   regular: "Segoe UI",
   semibold: "SegoeUISemibold",
};

export default styled.div<TextProps>`
   ${(p) => text(p)};
`;

export const text = (p: TextProps) => css`
   font-size: ${toRem(p.size || 16)};
   font-family: ${fontFamilyObject[p.fontFamily || "regular"]};
   color: ${colors[p.color || "grayText"]};
`;
