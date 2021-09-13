import { createTheme, MuiThemeProvider, Button, makeStyles } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import CustomInput from "../Components/CustomInput";
import CustomSelect from "../Components/CustomSelect";
import Dialog from "../Components/Dialog";
import { colors, commonStyles, fonts, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import Text from "../StyledComponents/Text";

const RowWrapper = styled(Grid)`
   grid-template-columns: ${toRem(100)} auto;
   width: 100%;
   align-items: center;
   row-gap: 0.4rem;
`;

const theme = createTheme({
   overrides: {
      ...commonStyles.overrides,
      MuiSelect: {
         select: {
            width: "100%",
         },
      },
      MuiInputBase: {
         root: {
            fontFamily: fonts.semibold,
            color: colors.grayText,
         },
      },
   },
   palette: {
      ...commonStyles.palette,
   },
});

const InviteAMemberDialog: React.FC = () => {
   const [team, setTeam] = useState("Accounts");
   console.log("hello");
   return (
      <MuiThemeProvider theme={theme}>
         <Dialog title="Invite A Memeber">
            <Text mb={20} size={13}>
               Kindly provide the details for the member to invite thestm
            </Text>
            <RowWrapper mb={40}>
               <Text size={13}>Email</Text>
               <CustomInput inputStyles={{ fontSize: toRem(13) }} placeholder="ali.suleman@airmed.pk"></CustomInput>
               <Text size={13}>Team</Text>
               <CustomInput inputStyles={{ fontSize: toRem(13) }} placeholder="Airmed"></CustomInput>
               <Text size={13}>Accounts</Text>
               <CustomSelect
                  fullWidth
                  label=""
                  options={[
                     { text: "Accounts", value: "Accounts" },
                     { text: "Option 2", value: "Option 2" },
                  ]}
                  value={team}
                  onValueChange={(x) => setTeam(x)}
                  style={{ fontSize: toRem(13) }}
               ></CustomSelect>
            </RowWrapper>
            <Flexbox justify="end" fullWidth>
               <Button variant="contained" color="secondary">
                  <Text color="white"> Add Member</Text>
               </Button>
            </Flexbox>
         </Dialog>
      </MuiThemeProvider>
   );
};
export default InviteAMemberDialog;
