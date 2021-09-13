import { IconButton, InputAdornment, TextField } from "@material-ui/core";

import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import VisibilityIcon from "@material-ui/icons/Visibility";
import { useState } from "react";
import { fonts } from "../Helpers/utils";
import { CSSProperties } from "styled-components";
interface CustomInputProps {
   type?: "email" | "password" | "text";
   staticType?: "text" | "password";
   placeholder?: string;
   inputStyles?: CSSProperties;
}

const CustomInput: React.FC<CustomInputProps> = ({ type = "text", placeholder, staticType, inputStyles }) => {
   const [isVisible, setIsVisible] = useState(false);
   const [value, setValue] = useState();
   const renderStartAdornment = () => {
      if (type === "email") {
         return (
            <InputAdornment position="start">
               <EmailOutlinedIcon></EmailOutlinedIcon>
            </InputAdornment>
         );
      }
      if (type === "password") {
         return (
            <InputAdornment position="start">
               <LockOutlinedIcon />
            </InputAdornment>
         );
      }
      return null;
   };
   const renderEndAdornment = () => {
      if (type === "password") {
         return (
            <InputAdornment position="end">
               <IconButton edge="end" onClick={() => setIsVisible(!isVisible)}>
                  {isVisible ? <VisibilityIcon></VisibilityIcon> : <VisibilityOffIcon></VisibilityOffIcon>}
               </IconButton>
            </InputAdornment>
         );
      }
      return null;
   };
   return (
      <TextField
         fullWidth
         InputProps={{
            startAdornment: renderStartAdornment(),
            endAdornment: renderEndAdornment(),
            disableUnderline: true,
            style: { fontSize: "1.25rem", ...inputStyles },
         }}
         placeholder={placeholder}
         type={(isVisible || type !== "password") && staticType !== "password" ? "text" : "password"}
      ></TextField>
   );
};
export default CustomInput;
