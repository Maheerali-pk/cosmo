import styled from "styled-components";
import { colors, repeat, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox, { flexbox } from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
// import Table from "./Table";
export interface AccountRecieveablesProps {}

const SubHeader: React.FC<AccountRecieveablesProps> = () => {
   return (
      <Flexbox pl={32} pr={52} fullWidth justify="space-between">
         <Flexbox>
            <Text fontFamily="semibold" mr={12}>
               3276
            </Text>
            <Text fontFamily="semibold">Checks</Text>
         </Flexbox>
         <Flexbox align="start">
            <Text size={20} fontFamily="semibold">
               52,150.00
            </Text>
            <Text size={13} fontFamily="semibold" ml={12}>
               PKR
            </Text>
         </Flexbox>
      </Flexbox>
   );
};

export default SubHeader;
