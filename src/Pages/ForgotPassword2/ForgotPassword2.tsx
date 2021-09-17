import LoggedOutLayout from "../../Components/LoggedOutLayout";
import { colors, images, toRem } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import CustomInput from "../../Components/CustomInput";
import ButtonPrimary from "../../StyledComponents/ButtonPrimary";
import UnderlinedHeading from "../../StyledComponents/UnderlinedHeading";
import OtpInput from "react-otp-input";
import styled from "styled-components";
import { useState } from "react";

const ForgotPassword2: React.FC = () => {
   const [otp, setOtp] = useState("");
   return (
      <LoggedOutLayout showBackToLogin background="#F2F6FC" image={images.login}>
         <>
            <Text size={32} fontFamily="semibold" mb={40}>
               Forgot Password
            </Text>
            <Text size={20} fontFamily="semibold" mb={40}>
               Please enter the OTP sent on your email
            </Text>
            <Flexbox gap={56} mb={40}>
               <OtpInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={4}
                  inputStyle={{
                     width: "100%",
                     fontSize: "4rem",
                     border: "none",
                     borderBottom: `${toRem(3)} solid #A4A4A4`,
                     outline: "none",
                  }}
                  containerStyle={{}}
                  separator={<div style={{ width: toRem(56) }}></div>}
               ></OtpInput>
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
