import {
   Button,
   ButtonBase,
   Checkbox,
   FormControl,
   FormControlLabel,
   InputAdornment,
   TextField,
} from "@material-ui/core";
import AirmedLogo from "../../Components/AirmedLogo";
import LoggedOutLayout from "../../Components/LoggedOutLayout";
import { colors, fonts, images } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CustomInput from "../../Components/CustomInput";
import ButtonPrimary from "../../StyledComponents/ButtonPrimary";
const Login: React.FC = () => {
   return (
      <LoggedOutLayout background="#F2F6FC" image={images.login}>
         <>
            <Text size={32} mb={48} fontFamily="semibold">
               Log In to your account
            </Text>
            <CustomInput placeholder="ali.suleman@airmed.pk" type="email"></CustomInput>
            <CustomInput placeholder="Enter your password" type="password"></CustomInput>

            <Flexbox mb={40} fullWidth justify="space-between">
               <Flexbox gap={12} align="center">
                  <Checkbox style={{ padding: "0" }}></Checkbox>
                  <Text fontFamily="semibold" size={20} cursorPointer>
                     Remember Me
                  </Text>
               </Flexbox>
               <Text fontFamily="semibold" size={20} cursorPointer>
                  Forgot Password?
               </Text>
            </Flexbox>

            <ButtonPrimary fullWidth style={{ background: colors.blueButton }}>
               <Text fontFamily="semibold" size={24} color="white">
                  {" "}
                  Login
               </Text>
            </ButtonPrimary>
         </>
      </LoggedOutLayout>
   );
};

export default Login;
