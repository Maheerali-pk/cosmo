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
const ForgotPassword1: React.FC = () => {
   return (
      <LoggedOutLayout showBackToLogin background="#F2F6FC" image={images.register}>
         <>
            <Text size={32} fontFamily="semibold" mb={40}>
               Forgot Password
            </Text>
            <Text size={20} fontFamily="semibold" mb={40}>
               Please enter your email to get an OTP
            </Text>

            <CustomInput placeholder="ali.suleman@airmed.pk" type="email"></CustomInput>
            <ButtonPrimary fullWidth style={{ background: colors.blueButton }}>
               <Text fontFamily="semibold" size={24} color="white">
                  {" "}
                  Request OTP
               </Text>
            </ButtonPrimary>
         </>
      </LoggedOutLayout>
   );
};

export default ForgotPassword1;
