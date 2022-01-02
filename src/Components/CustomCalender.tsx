import styled from "styled-components";
import { chunks, colors, compareDates, isDateInRange, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import Grid from "../StyledComponents/Grid";
import { Button } from "@material-ui/core";
let totalDaysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
interface CalendarTag {
   title: string;
   startDate: Date;
   endDate: Date;
}

interface CustomCalendarProps {
   year: number;
   month: number;
   tags: CalendarTag[];
}
interface ICell {}

const TableWrapper = styled.table`
   overflow: hidden;
   td {
      font-size: ${toRem(13)};
      border: 1px solid #707070;
      height: ${toRem(120)};
      width: ${toRem(225)};
      vertical-align: top;
   }
   thead td {
      text-align: center;
      vertical-align: middle;
      height: ${toRem(40)};
   }
   border-collapse: collapse;
   margin: 2.5rem ${toRem(56)};
`;

const BlueTag = styled.div`
   height: ${toRem(22)};
   background: ${colors.blueButton};
   padding: 0.5rem 0.5rem;
   border-radius: ${toRem(2)};
   display: flex;
   align-items: center;
   width: 100%;
`;

const MiddleBlueTag = styled(BlueTag)`
   width: 110%;
`;
const StartBlueTag = styled(BlueTag)`
   margin-left: 5%;
   width: 99%;
`;

const EndBlueTag = styled(BlueTag)`
   margin-right: 4%;
   width: 95%;
   margin-left: -1%;
`;

const StartEndBlueTag = styled(BlueTag)`
   margin-left: 5%;
   margin-right: 5%;
   width: 95%;
`;

const CustomCalendar: React.FC<CustomCalendarProps> = ({ year, month, tags }) => {
   const allDates = Array(31)
      .fill(0)
      .map((x, i) => new Date(`${month}/${i + 1}/${year}`))
      .filter((a) => a.getMonth() + 1 === month);
   const startDate = new Date(`${month}/${1}/${year}`);
   const startWeekDay = startDate.getDay();
   const totalDays = totalDaysOfMonths[startDate.getMonth()];

   //1d array
   let cells = Array(totalDays)
      .fill(0)
      .map((x, i) => i + 1);
   cells = [...Array(startWeekDay).fill(0), ...cells];

   //2d array
   const tableData: number[][] = chunks(cells, 7);
   let lastRow = tableData[tableData.length - 1];
   tableData[tableData.length - 1] = [...lastRow, ...Array(7 - lastRow.length).fill(0)];

   const renderCell = (x: number) => {
      const date = allDates[x - 1];
      if (!date) {
         return <td></td>;
      }
      const dateInRange = tags.some(({ endDate, startDate }) => isDateInRange(date, startDate, endDate));
      const startDate = tags.find((x) => compareDates(date, x.startDate));
      const endDate = tags.find((x) => compareDates(date, x.endDate));
      let tagElm: JSX.Element = <></>;
      if (dateInRange) {
         tagElm = <MiddleBlueTag></MiddleBlueTag>;
      }
      if (startDate) {
         tagElm = (
            <StartBlueTag>
               <Text size={13} color="white">
                  {startDate.title}
               </Text>
            </StartBlueTag>
         );
      }
      if (endDate) {
         tagElm = (
            <EndBlueTag>
               <Text size={13} color="white"></Text>
            </EndBlueTag>
         );
      }
      if (startDate && endDate) {
         tagElm = (
            <StartEndBlueTag>
               <Text size={13} color="white"></Text>
            </StartEndBlueTag>
         );
      }
      return (
         <td>
            <Flexbox fullWidth column>
               <Text p={8} size={13}>
                  {x}
               </Text>{" "}
               {tagElm}
            </Flexbox>{" "}
         </td>
      );
   };

   return (
      <TableWrapper>
         <thead>
            <tr>
               <td>Sunday</td>
               <td>Monday</td>
               <td>Tuesday</td>
               <td>Wednesday</td>
               <td>Thursday</td>
               <td>Friday</td>
               <td>Saturday</td>
            </tr>
         </thead>
         <tbody>
            {tableData.map((row) => (
               <tr>{row.map((x) => renderCell(x))}</tr>
            ))}
         </tbody>
      </TableWrapper>
   );
};

export default CustomCalendar;
