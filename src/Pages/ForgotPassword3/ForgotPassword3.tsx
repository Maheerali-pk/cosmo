import LoggedOutLayout from "../../Components/LoggedOutLayout";
import { colors, images } from "../../Helpers/utils";
import Flexbox, { flexbox } from "../../StyledComponents/Flexbox";
import Text from "../../StyledComponents/Text";
import CustomInput from "../../Components/CustomInput";
import ButtonPrimary from "../../StyledComponents/ButtonPrimary";
import UnderlinedHeading from "../../StyledComponents/UnderlinedHeading";
const ForgotPassword3: React.FC = () => {
   return (
      <LoggedOutLayout showBackToLogin background="#F2F6FC" image={images.login}>
         <>
            <Text size={32} fontFamily="semibold" mb={40}>
               Forgot Password
            </Text>
            <Text size={20} fontFamily="semibold" mb={40}>
               Please enter a new Password
            </Text>
            <Flexbox fullWidth gap={56}>
               <CustomInput staticType="password"></CustomInput>
            </Flexbox>
            <ButtonPrimary fullWidth style={{ background: colors.blueButton }}>
               <Text fontFamily="semibold" size={24} color="white">
                  Update
               </Text>
            </ButtonPrimary>
         </>
      </LoggedOutLayout>
   );
};

export default ForgotPassword3;
