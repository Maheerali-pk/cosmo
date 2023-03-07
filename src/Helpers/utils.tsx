import { SelectOption } from "../Components/CustomSelect";
import starPurple from "../Assets/Icons/starPurple.svg";
import tick from "../Assets/Icons/tick.svg";
import noun from "../Assets/Icons/noun.png";
import register from "../Assets/Images/register-image.png";
import register2 from "../Assets/Images/register-image-2.png";
import login from "../Assets/Images/login-image.png";
import { Theme, ThemeOptions } from "@material-ui/core";

export const toRem = (px: number) => px / 16 + "rem";
export const toEm = (px: number) => px / 16 + "em";
export const interpolate = (arr: any[], item: any) =>
   arr.flatMap((x) => [x, item]).slice(0, -1);

export const colors = {
   grayHeading: "#4B4B4B",
   grayLine: "#707070",
   grayText: "#1D252C",
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
   orangeStar: "#FB9F00",
   inputLightText: "#B2B2B2",
   black: "black",
   footerFigureText: "#1D252C",

   drawerBackground: "#e5e8ee",
   bluePrimary: "#1071e3",
   bodyBackground: "#eceff3",
   green: "#2bbf57",
   // color: "white !important",
   // transition: "background-color .1s ease",
   // "&:hover": {
   //    backgroundColor: "#093f7f",
   // },
};
export type FontFamilyKey = "regular" | "semibold" | "myraid-pro" | "bold";

export const fonts: { [k in FontFamilyKey]: string } = {
   "myraid-pro": "myraid-pro",
   regular: "'Montserrat', sans-serif",
   semibold: "SegoeUISemibold",
   bold: "SegoeUIBold",
};
export const stringsToOptions = (arr: string[]): SelectOption[] =>
   arr.map((x) => ({ text: x, value: x }));

export const repeat = (item: any, times: number): any[] =>
   Array(times)
      .fill(0)
      .map((x) =>
         typeof item === "object"
            ? Array.isArray(item)
               ? [...item]
               : { ...item }
            : item
      );

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
// const IOSSwitch = styled((props: SwitchProps) => (
//   <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
// ))(({ theme }) => ({
//   width: 42,
//   height: 26,
//   padding: 0,
//   '& .MuiSwitch-switchBase': {
//     padding: 0,
//     margin: 2,
//     transitionDuration: '300ms',
//     '&.Mui-checked': {
//       transform: 'translateX(16px)',
//       color: '#fff',
//       '& + .MuiSwitch-track': {
//         backgroundColor: theme.palette.mode === 'dark' ? '#2ECA45' : '#65C466',
//         opacity: 1,
//         border: 0,
//       },
//       '&.Mui-disabled + .MuiSwitch-track': {
//         opacity: 0.5,
//       },
//     },
//     '&.Mui-focusVisible .MuiSwitch-thumb': {
//       color: '#33cf4d',
//       border: '6px solid #fff',
//     },
//     '&.Mui-disabled .MuiSwitch-thumb': {
//       color:
//         theme.palette.mode === 'light'
//           ? theme.palette.grey[100]
//           : theme.palette.grey[600],
//     },
//     '&.Mui-disabled + .MuiSwitch-track': {
//       opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     boxSizing: 'border-box',
//     width: 22,
//     height: 22,
//   },
//   '& .MuiSwitch-track': {
//     borderRadius: 26 / 2,
//     backgroundColor: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
//     opacity: 1,
//     transition: theme.transitions.create(['background-color'], {
//       duration: 500,
//     }),
//   },
// }));

export const commonStyles: ThemeOptions = {
   palette: {
      secondary: {
         main: colors.blueButton,
      },
   },
   overrides: {
      MuiSwitch: {
         root: {
            height: 20,
            width: 45,
            padding: 0,
            margin: 0,
         },

         switchBase: {
            padding: 3,
            "&$checked": {
               // This is the part that animates the thumb when the switch is toggled (to the right)
               transform: "translateX(25px)",
               // This is the thumb color
               color: "white",
               "& + $track": {
                  // This is the track's background color (in this example, the iOS green)
                  backgroundColor: colors.green,
                  opacity: 1,
                  border: "none",
               },
            },
         },
         thumb: {
            backgroundColor: "white",
            height: 14,
            width: 14,
            boxShadow: "none",
         },
         track: {
            borderRadius: 19,
            height: 20,
            backgroundColor: "#ced5db",
            opacity: 1,
            "$checked$checked + &": {
               // Controls checked color for the track
               opacity: 1,
               backgroundColor: colors.green,
            },
         },
         checked: {
            "& .MuiSwtich-track": {
               backgroundColor: "green",
            },
            backgroundColor: "green",
         },
      },
      MuiMenuItem: {
         root: {
            fontSize: "12px",
            transition: "background-color .1s ease",
            "&.menu-item-primary": {
               background: colors.bluePrimary,
            },
            "&.menu-item-primary:hover": {
               backgroundColor: "#093f7f",
            },
         },
      },
      MuiMenu: {
         list: {
            padding: 0,
            "&.menu-list-primary": {
               background: colors.bluePrimary,
               color: "white",
            },

            fontSize: "12px",
         },
         // paper: {
         //    "$.menu-primary-paper": {
         //       backgroundColor: colors.bluePrimary,
         //    },
         // },
      },
      MuiRadio: {
         root: {
            "& svg": {
               height: "0.75rem",
               width: "0.75rem",
            },
         },
      },
      MuiCheckbox: {
         root: {
            "& .MuiSvgIcon-root": {
               height: "1rem !important",
               width: "1rem",
            },
            "& .MuiIconButton-label": {
               position: "relative",
               zIndex: 0,
            },
            "&$checked": {
               color: "#deb316 !important",
            },

            "&:not($checked) .MuiIconButton-label:after": {
               content: '""',
               left: 3,
               top: 3,
               height: 9,
               width: 9,
               position: "absolute",
               backgroundColor: "white",
               zIndex: -1,
            },
            padding: 0,
            width: "fit-content",
         },
         input: {
            color: "white",
            backgroundColor: "white",
         },
      },
      MuiInputLabel: {
         root: {
            color: colors.graySubHeading,
         },
      },
      MuiSelect: {
         root: {
            color: colors.grayText,
         },
         select: {
            width: "16rem",
            backgroundColor: "white",
            fontSize: "12px",
            borderRadius: "3px",
            color: "#1D252C",
            border: "1px solid #C4D0DA",
            padding: "5px",
         },
      },
      MuiInputBase: {
         root: {
            color: colors.grayText,
            fontSize: "12px",
            padding: "none !important",
            fontFamily: fonts.regular,
         },
         input: {
            borderRadius: "3px",
            height: "unset !important",
            paddingLeft: toRem(9.23),
            paddingRight: toRem(9.23),
            paddingTop: toRem(4.5),
            paddingBottom: toRem(4.5),
         },
         formControl: {
            padding: "none !important",
         },
      },
      MuiButtonGroup: {
         root: { boxShadow: "none" },
         contained: { boxShadow: "none" },
      },
      MuiButton: {
         root: {
            borderRadius: "3px",
            color: colors.grayText,
            fontSize: "12px",
            fontWeight: 400,
            padding: `${toRem(4)} ${toRem(16)}`,
            textTransform: "initial",
            boxShadow: "none",
         },

         containedPrimary: {
            color: "white !important",
            backgroundColor: "#1071e3",
            transition: "background-color .1s ease",
            boxShadow: "none !important",
            "&:hover": {
               backgroundColor: "#093f7f",
               boxShadow: "none",
            },
         },
         containedSecondary: {
            color: "#1D252C !important",
            backgroundColor: "white",
            transition: "background-color .1s ease",
            "&:hover": {
               backgroundColor: "#f7f9fa",
               boxShadow: "none",
            },
            boxShadow: "none",
            borderColor: "#ced5db !important",
            border: "1px solid #ced5db",
         },
      },
   },
};

export const chunks = (arr: any[], n: number) =>
   Array(Math.ceil(arr.length / n))
      .fill(0)
      .map((x, i) => arr.slice(i * n, (i + 1) * n));

export const compareDates = (d1: Date, d2: Date) => {
   return (
      d1.getDate() === d2.getDate() &&
      d1.getMonth() === d2.getMonth() &&
      d1.getFullYear() === d2.getFullYear()
   );
};
export const isDateInRange = (date: Date, min: Date, max: Date) => {
   return date.getTime() > min.getTime() && date.getTime() < max.getTime();
};

export const getDateString = (d: Date) => {
   d = new Date(d);
   const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
   ];
   return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
};

// export function mergeOuterLocalTheme(outerTheme: Theme, localTheme: Theme) {
//    if (typeof localTheme === "function") {
//       const mergedTheme = localTheme (outerTheme);

//       return mergedTheme;
//    }

//    return { ...outerTheme, ...localTheme };
// }
