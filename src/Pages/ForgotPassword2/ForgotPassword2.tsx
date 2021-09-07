import LoggedOutLayout from "../../Components/LoggedOutLayout";
import { colors, images } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import CustomInput from "../../Components/CustomInput";
import ButtonPrimary from "../../StyledComponents/ButtonPrimary";
import UnderlinedHeading from "../../StyledComponents/UnderlinedHeading";
const ForgotPassword2: React.FC = () => {
   return (
      <LoggedOutLayout showBackToLogin background="#F2F6FC" image={images.login}>
         <>
            <Text size={32} fontFamily="semibold" mb={40}>
               Forgot Password
            </Text>
            <Text size={20} fontFamily="semibold" mb={40}>
               Please enter the OTP sent on your email
            </Text>
            <Flexbox gap={56}>
               <CustomInput></CustomInput>
               <CustomInput></CustomInput>
               <CustomInput></CustomInput>
               <CustomInput></CustomInput>
            </Flexbox>
            <ButtonPrimary fullWidth style={{ background: colors.blueButton }}>
               <Text fontFamily="semibold" size={24} color="white">
                  {" "}
                  Request OTP
               </Text>
            </ButtonPrimary>
            <Flexbox gap={16} mt={40}>
               <Text size={20} fontFamily="semibold">
                  Didn't get OTP?
               </Text>
               <Text size={20} fontFamily="semibold" cursorPointer underline>
                  {" "}
                  Resend Code
               </Text>
            </Flexbox>
         </>
      </LoggedOutLayout>
   );
};

export default ForgotPassword2;
