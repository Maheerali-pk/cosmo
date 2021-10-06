import { Button, ButtonGroup } from "@material-ui/core";
import React, { useState } from "react";
import styled, { CSSProperties } from "styled-components";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Grid from "../StyledComponents/Grid";
import Text from "../StyledComponents/Text";

interface PaginationTableProps {
   rows?: string[][];
   headings: string[];
   RowWrapper?: React.FC;
   HeadingsRowWrapper: React.FC;
   rowsPerPage?: number;
   wrapperStyles?: CSSProperties;
}

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
`;

const PaginationTable: React.FC<PaginationTableProps> = ({
   headings,
   rows,
   HeadingsRowWrapper,
   RowWrapper,
   rowsPerPage = 20,
   wrapperStyles,
   children,
}) => {
   const [page, setPage] = useState(0);
   let noOfPages = Math.ceil((rows || React.Children.toArray(children)).length / rowsPerPage);
   let noOfItems = (rows || React.Children.toArray(children)).length;
   const renderRows = () => {
      if (rows && RowWrapper) {
         return rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((row) => (
            <RowWrapper>
               {row.map((text) => (
                  <Text>{text}</Text>
               ))}
            </RowWrapper>
         ));
      } else if (children) {
         const childrenArr = React.Children.toArray(children);
         console.log(childrenArr.length, "child arr length");
         return childrenArr.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map((child) => <>{child}</>);
      }
   };
   const renderPaginationStatus = () => {
      const childrenArr = React.Children.toArray(children);
      let firstRowNo = rowsPerPage * page + 1;
      let lastRowNo = rowsPerPage * (page + 1) + 1;
      lastRowNo = lastRowNo > noOfItems ? noOfItems : lastRowNo;
      return (
         <Text size={13}>
            {firstRowNo} - {lastRowNo} of {noOfItems} Items
         </Text>
      );
   };
   return (
      <Flexbox
         column
         fullWidth
         justify="space-between"
         overflowAuto
         style={{ height: "100%", ...(wrapperStyles || {}) }}
      >
         <Flexbox column fullWidth overflowAuto>
            <HeadingsRowWrapper>
               {headings.map((x) => (
                  <Text>{x}</Text>
               ))}
            </HeadingsRowWrapper>
            <Flexbox column fullWidth overflowAuto>
               {renderRows()}
            </Flexbox>
         </Flexbox>
         <Flexbox style={{ background: "#FCFCFC" }} padding="0.5rem 2rem" justify="space-between" fullWidth>
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
            {renderPaginationStatus()}
         </Flexbox>
      </Flexbox>
   );
};
export default PaginationTable;
