import Navbar from "../../Components/Navbar";
import Flexbox from "../../StyledComponents/Flexbox";

import Tabs from "../../Components/Tabs";
import { toRem } from "../../Helpers/utils";
const Main: React.FC = () => {
   return (
      <Flexbox column fullWidth>
         <Navbar headingItems={[]} />{" "}
         <Flexbox padding="1rem 2rem" fullWidth column>
            <Tabs titles={["Dashboard", "Companies"]}>
               <Flexbox padding={`${toRem(24)} ${toRem(10)}`}>Dashbaord</Flexbox>
               <Flexbox padding={`${toRem(24)} ${toRem(10)}`}>Companies</Flexbox>
            </Tabs>
         </Flexbox>
      </Flexbox>
   );
};

export default Main;
