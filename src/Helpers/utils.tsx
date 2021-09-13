import { SelectOption } from "../Components/CustomSelect";
import starPurple from "../Assets/Icons/starPurple.svg";
import tick from "../Assets/Icons/tick.svg";
import noun from "../Assets/Icons/noun.png";
import register from "../Assets/Images/register-image.png";
import register2 from "../Assets/Images/register-image-2.png";
import login from "../Assets/Images/login-image.png";
import { Theme, ThemeOptions } from "@material-ui/core";

export const toRem = (px: number) => px / 16 + "rem";
export const interpolate = (arr: any[], item: any) => arr.flatMap((x) => [x, item]).slice(0, -1);

export const colors = {
   grayHeading: "#4B4B4B",
   grayLine: "#707070",
   grayText: "#7D7D7D",
   graySubHeading: "#B1B1B1",
   grayShapes: "#C5C5C5",
   graySelection: "#DCDCDC",
   graySelection2: "#E5E5E5",
   bueLink: "#5178D1",
   skyBlueLines: "#EDF2F9",
   headingBackground: "#FCFCFC",
   indigoLogo: "#A81FA8",
   indigoDark: "#650097",
   sidebarBackground: "#EAEAEA",
   sidebarLogoPurple: "#0701B5",
   white: "white",
   pageOutlineSkyblue: "#F3F3F3",
   tableFooterHrColor: "#E1E1E1",
   blueButton: "#418BCA",
   companyCardBackground: "#F5F5F5",
};
export type FontFamilyKey = "regular" | "semibold" | "myraid-pro";

export const fonts: { [k in FontFamilyKey]: string } = {
   "myraid-pro": "myraid-pro",
   regular: "SegoeUI",
   semibold: "SegoeUISemibold",
};
export const stringsToOptions = (arr: string[]): SelectOption[] => arr.map((x) => ({ text: x, value: x }));

export const repeat = (item: any, times: number): any[] =>
   Array(times)
      .fill(0)
      .map((x) => item);

export const allIcons = {
   starPurple,
   tick,
   noun,
};

export const images = {
   register,
   register2,
   login,
};

export const commonStyles: ThemeOptions = {
   palette: {
      secondary: {
         main: colors.blueButton,
      },
   },
   overrides: {
      MuiInputLabel: {
         root: {
            color: colors.graySubHeading,
         },
      },
      MuiSelect: {
         root: {
            fontFamily: fonts.semibold,
            color: colors.grayText,
         },
         select: {
            paddingRight: 0,
            width: "16rem",
         },
      },
      MuiInputBase: {
         root: {
            fontFamily: fonts.semibold,
            color: colors.grayText,
         },
      },
      MuiButton: {
         root: {
            borderRadius: "2px",
            color: colors.grayText,
            padding: `${toRem(4)} ${toRem(16)}`,
            textTransform: "initial",
         },
      },
   },
};
// export function mergeOuterLocalTheme(outerTheme: Theme, localTheme: Theme) {
//    if (typeof localTheme === "function") {
//       const mergedTheme = localTheme (outerTheme);

//       return mergedTheme;
//    }

//    return { ...outerTheme, ...localTheme };
// }
