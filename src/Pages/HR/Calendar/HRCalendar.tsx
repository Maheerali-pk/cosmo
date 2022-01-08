import styled from "styled-components";
import CustomCalendar from "../../../Components/CustomCalender";
import Dropdown from "../../../Components/Dropdown";
import Layout from "../../../Components/Layout";
import PageContentHeader from "../../../Components/PageContentHeader";
import { colors, stringsToOptions, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Text from "../../../StyledComponents/Text";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import { Button, IconButton } from "@material-ui/core";
import CustomSelect from "../../../Components/CustomSelect";
import { useState } from "react";
const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content min-content auto;
`;
interface HRCalendarProps {}

const departmentOptions = stringsToOptions(["All Departments", "Option 2", "Option 3"]);
const levelOptions = stringsToOptions(["All Levels", "Option 2", "Option 3"]);
const monthOptions = stringsToOptions(["July 2021", "August 2021", "September 2021"]);

const StickyFooterWrapper = styled(Flexbox)`
   position: fixed;
   bottom: 0;
   right: 0;
   width: calc(100% - 15rem);
   background: ${colors.headingBackground};
`;
const StickyFooter: React.FC = () => {
   return <></>;
};
const HRCalendar: React.FC<HRCalendarProps> = () => {
   const [dept, setDept] = useState(departmentOptions[0].value);
   const [level, setLevel] = useState(levelOptions[0].value);
   const [month, setMonth] = useState(monthOptions[0].value);
   const [calendarMonth, setCalendarMonth] = useState(6);
   const [calendarYear, setCalendarYear] = useState(2021);
   return (
      <Layout navbarItems={["Airmed", "Human Resources", "People"]}>
         <PageWrapper>
            <PageContentHeader items={["Dashboard", "People", "Company", "Reports"]}></PageContentHeader>
            <Flexbox mt={8} margin="0 2rem" justify="space-between">
               <Text size={20} fontFamily="semibold">
                  Calendar
               </Text>
               <Flexbox>
                  <Dropdown
                     style={{
                        borderRight: `${toRem(2)} solid ${colors.sidebarBackground}`,
                        paddingRight: "1.5rem",
                        marginRight: "1.5rem",
                     }}
                     label="Export"
                     showDropdownIcon
                     items={[
                        { text: "Option 1", onClick: () => {} },
                        { text: "Option 2", onClick: () => {} },
                     ]}
                  ></Dropdown>

                  <IconButton style={{ padding: 0, width: "fit-content" }}>
                     <SettingsOutlinedIcon></SettingsOutlinedIcon>
                  </IconButton>
               </Flexbox>
            </Flexbox>
            <Flexbox style={{ borderBottom: "2px solid #EAEAEA", paddingBottom: "0.5rem" }} justify="evenly" mt={20}>
               <CustomSelect
                  onValueChange={(val) => setDept(val)}
                  options={departmentOptions}
                  value={dept}
                  label="Department"
               ></CustomSelect>
               <CustomSelect
                  onValueChange={(val) => setMonth(val)}
                  options={monthOptions}
                  value={month}
                  label="Month"
               ></CustomSelect>
               <CustomSelect
                  onValueChange={(val) => setLevel(val)}
                  options={levelOptions}
                  value={level}
                  label="Level"
               ></CustomSelect>
            </Flexbox>
            <Flexbox align="start" overflowAuto mb={40}>
               <CustomCalendar
                  tags={[{ title: "Huzaifa Aleem (H)", startDate: new Date(`6/10/21`), endDate: new Date(`6/13/21`) }]}
                  year={calendarYear}
                  month={calendarMonth}
               ></CustomCalendar>
               <StickyFooterWrapper gap={32} padding="0.75rem 1rem" fullWidth justify="center">
                  <Button onClick={() => setCalendarMonth(calendarMonth - 1)} color="secondary" variant="contained">
                     {"< Prev "}
                  </Button>
                  <Button onClick={() => setCalendarMonth(calendarMonth + 1)} color="secondary" variant="contained">
                     {"Next >"}
                  </Button>
               </StickyFooterWrapper>
            </Flexbox>
         </PageWrapper>
      </Layout>
   );
};

export default HRCalendar;
