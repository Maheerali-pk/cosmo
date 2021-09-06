import AirmedLogo from "../../Components/AirmedLogo";
import LoggedOutLayout from "../../Components/LoggedOutLayout";
import { colors, images } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import EmailOutlinedIcon from "@material-ui/icons/EmailOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import CustomInput from "../../Components/CustomInput";
import ButtonPrimary from "../../StyledComponents/ButtonPrimary";
const Register2: React.FC = () => {
   return (
      <LoggedOutLayout background="#FEFFFF" image={images.register2}>
         <>
            <AirmedLogo></AirmedLogo>
            <Text align="center" fontFamily="semibold" size={20} mb={52} mt={52}>
               Kindly provide your personal details to proceed
            </Text>
            <Flexbox fullWidth gap={40}>
               <CustomInput placeholder="First Name"></CustomInput>
               <CustomInput placeholder="Last Name"></CustomInput>
            </Flexbox>
            <CustomInput placeholder="Accounts"></CustomInput>
            <CustomInput placeholder="Designation"></CustomInput>
            <CustomInput placeholder="Mobile"></CustomInput>
            <ButtonPrimary style={{ background: colors.blueButton }}>
               <Text fontFamily="semibold" size={24} color="white">
                  Proceed
               </Text>
            </ButtonPrimary>
         </>
      </LoggedOutLayout>
   );
};

export default Register2;
