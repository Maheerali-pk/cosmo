import { Button, ButtonBase, InputAdornment, TextField } from "@material-ui/core";
import AirmedLogo from "../../Components/AirmedLogo";
import LoggedOutLayout from "../../Components/LoggedOutLayout";
import { colors, images } from "../../Helpers/utils";
import Flexbox from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CustomInput from "../../Components/CustomInput";
import ButtonPrimary from "../../StyledComponents/ButtonPrimary";
const Register: React.FC = () => {
   return (
      <LoggedOutLayout background="#F2F6FC" image={images.register}>
         <>
            <AirmedLogo></AirmedLogo>
            <Text align="center" fontFamily="semibold" size={20} mb={52} mt={52}>
               You have been invited to join Airmed on COSMO by an admin. Kindly choose a password to create your
               account.
            </Text>
            <CustomInput placeholder="ali.suleman@airmed.pk" type="email"></CustomInput>
            <CustomInput placeholder="Choose a password" type="password"></CustomInput>
            <CustomInput placeholder="Re-type Password" type="password"></CustomInput>
            <ButtonPrimary style={{ background: colors.blueButton }}>
               <Text fontFamily="semibold" size={24} color="white">
                  {" "}
                  Create Account
               </Text>
            </ButtonPrimary>
         </>
      </LoggedOutLayout>
   );
};

export default Register;
