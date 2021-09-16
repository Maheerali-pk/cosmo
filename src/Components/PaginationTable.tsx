import { Button, ButtonGroup } from "@material-ui/core";
import { useState } from "react";
import styled from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import Text from "../StyledComponents/Text";

interface PaginationTableProps {
   rows: string[][];
   headings: string[];
   RowWrapper: React.FC;
   HeadingsRowWrapper: React.FC;
}
let rowsPerPage = 20;

const PaginationButton = styled(Button)`
   padding: 0.25rem 0.75rem !important;
   min-width: fit-content !important;
   :disabled span {
      color: ${colors.sidebarBackground} !important;
   }
   border-color: ${colors.sidebarBackground} !important;
`;

const PaginationNumberButton = styled(PaginationButton)`
   height: auto;
   /* aspect-ratio: 1/1 !important; */
   /* min-width: none; */
`;

const PaginationTable: React.FC<PaginationTableProps> = ({ headings, rows, HeadingsRowWrapper, RowWrapper }) => {
   const [page, setPage] = useState(0);
   let noOfPages = Math.ceil(rows.length / rowsPerPage);
   return (
      <Flexbox column fullWidth style={{ overflow: "auto" }}>
         <HeadingsRowWrapper>
            {headings.map((x) => (
               <Text>{x}</Text>
            ))}
         </HeadingsRowWrapper>
         {rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
            <RowWrapper>
               {row.map((text) => (
                  <Text>{text}</Text>
               ))}
            </RowWrapper>
         ))}
         <Flexbox></Flexbox>
         <Flexbox padding="0.5rem 2rem">
            <ButtonGroup variant="outlined">
               <PaginationButton onClick={() => setPage(page - 1)} disabled={page === 0}>
                  Prev
               </PaginationButton>
               {Array(noOfPages)
                  .fill(0)
                  .map((_, i) => (
                     <PaginationNumberButton
                        onClick={() => setPage(i)}
                        {...(i === page ? { variant: "contained", color: "secondary" } : {})}
                     >
                        {i + 1}
                     </PaginationNumberButton>
                  ))}
               <PaginationButton onClick={() => setPage(page + 1)} disabled={page === noOfPages - 1}>
                  Next
               </PaginationButton>
            </ButtonGroup>
         </Flexbox>
      </Flexbox>
   );
};
export default PaginationTable;
