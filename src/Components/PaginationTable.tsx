import {
   Button,
   ButtonGroup,
   Checkbox,
   IconButton,
   Input,
} from "@material-ui/core";
import {
   AddOutlined,
   ChevronLeft,
   ChevronRight,
   CloudDownload,
   CloudDownloadOutlined,
   Delete,
   DeleteOutline,
   FilterOutlined,
   PlusOneOutlined,
   PrintOutlined,
   RestoreOutlined,
   SearchOutlined,
   SettingsBackupRestoreOutlined,
   ToggleOff,
   ToggleOffOutlined,
   ToggleOn,
} from "@material-ui/icons";
import React, { useState } from "react";
import styled, { CSSProperties, StyledComponent } from "styled-components";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
import CustomizeList from "../Drawers/CustomizeList";
import { colors, toRem } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Grid, { GridProps } from "../StyledComponents/Grid";
import Text from "../StyledComponents/Text";
import CustomDrawer from "./CustomDrawer";

interface PaginationTableProps {
   rows?: string[][];
   headings: string[];
   RowWrapper?: StyledComponent<"div", any, GridProps, never>;
   HeadingsRowWrapper: React.FC;
   rowsPerPage?: number;
   wrapperStyles?: CSSProperties;
}

const PaginationButton = styled(Button)`
   width: ${toRem(30)};
   height: ${toRem(30)};
   display: flex;
   align-items: center;
   justify-content: center;
   min-width: fit-content !important;
   :disabled span {
      color: ${colors.sidebarBackground} !important;
   }
   border-color: ${colors.sidebarBackground} !important;
   svg {
      opacity: 0.7;
      font-size: 21px;
   }
   aspect-ratio: 1/1;
`;

const PaginationNumberButton = styled(PaginationButton)`
   height: auto;
`;
const AddIconButtonWrapper = styled(IconButton)`
   background-color: #e5f4eb !important;
   border: 1px solid #c1e6cd !important;
   border-radius: 50%;
   svg {
      color: #2bbf57;
      font-size: 18px !important;
   }
   height: ${toRem(30)};
   width: ${toRem(30)};

   display: flex;
   align-items: center;
   justify-content: center;
   &:hover {
      background-color: #c1e5cf !important;
   }
   &:hover svg {
      color: #229544;
   }
   transition: background-color 0.1s ease;
`;

const TableHeader = styled(Flexbox)`
   box-shadow: 0 2px 2px 0 rgb(83 102 119 / 14%);
   z-index: 90;
`;
const IconButtonWrapper = styled(IconButton)`
   svg {
      font-size: 20px !important;
   }
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
   let noOfPages = Math.ceil(
      (rows || React.Children.toArray(children)).length / rowsPerPage
   );
   let noOfItems = (rows || React.Children.toArray(children)).length;
   const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
   const [selectAllChecked, setSelectAllChecked] = useState(false);
   const [state, dispatch] = useGlobalContext();
   const toggleCheckbox = (
      index: number,
      e: React.ChangeEvent<HTMLInputElement>
   ) => {
      const newSet = new Set(selectedRows);
      if (e.target.checked) newSet.add(index);
      else newSet.delete(index);
      setSelectedRows(newSet);
   };
   const renderRows = () => {
      if (rows && RowWrapper) {
         const startIndex = page * rowsPerPage;
         return rows
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((row, i) => (
               <RowWrapper
                  style={{
                     backgroundColor: selectedRows.has(startIndex + i)
                        ? "#fef5d4"
                        : "",
                  }}
               >
                  <Text>
                     <Checkbox
                        style={{
                           color: selectedRows.has(startIndex + i)
                              ? "#deb316"
                              : "",
                        }}
                        checked={selectedRows.has(startIndex + i)}
                        onChange={(e) => toggleCheckbox(i + startIndex, e)}
                     ></Checkbox>
                  </Text>
                  {row.map((text) => (
                     <>
                        <Text>{text}</Text>
                     </>
                  ))}
               </RowWrapper>
            ));
      } else if (children) {
         const childrenArr = React.Children.toArray(children);
         console.log(childrenArr.length, "child arr length");
         return childrenArr
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map((child) => <>{child}</>);
      }
   };
   const renderPaginationStatus = () => {
      const childrenArr = React.Children.toArray(children);
      let firstRowNo = rowsPerPage * page + 1;
      let lastRowNo = rowsPerPage * (page + 1) + 1;
      lastRowNo = lastRowNo > noOfItems ? noOfItems : lastRowNo;
      return (
         <Text size={13} mr={20}>
            {firstRowNo} - {lastRowNo} of {noOfItems}
         </Text>
      );
   };
   const toggleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.checked) {
         setSelectAllChecked(true);
         setSelectedRows(
            new Set(
               Array(rows?.length)
                  .fill(0)
                  .map((_, i) => i)
            )
         );
      } else {
         setSelectAllChecked(false);
         setSelectedRows(new Set());
      }
   };
   return (
      <Flexbox
         column
         fullWidth
         overflowAuto
         style={{ height: "100%", ...(wrapperStyles || {}) }}
      >
         <TableHeader fullWidth justify="space-between" px={20} py={15}>
            <Flexbox gap={50}>
               <Flexbox gap={16}>
                  <AddIconButtonWrapper>
                     <AddOutlined></AddOutlined>
                  </AddIconButtonWrapper>
                  {selectedRows.size ? (
                     <>
                        <IconButtonWrapper
                           style={{
                              padding: "0.3rem",
                              background: "#2bbf57",
                              color: "white",
                           }}
                        >
                           <PrintOutlined></PrintOutlined>
                        </IconButtonWrapper>
                        <IconButtonWrapper
                           style={{
                              padding: "0.3rem",
                              backgroundColor: "#de2f2f",
                              color: "white",
                           }}
                        >
                           <DeleteOutline></DeleteOutline>
                        </IconButtonWrapper>
                     </>
                  ) : null}
                  <IconButtonWrapper style={{ padding: "0.3rem" }}>
                     <SearchOutlined></SearchOutlined>
                  </IconButtonWrapper>
               </Flexbox>
               <Flexbox gap={16}>
                  <IconButtonWrapper style={{ padding: "0.3rem" }}>
                     <i className="fas fa-filter fa-xs"></i>
                  </IconButtonWrapper>
                  <IconButtonWrapper style={{ padding: "0.3rem" }}>
                     <RestoreOutlined></RestoreOutlined>
                  </IconButtonWrapper>
                  <IconButtonWrapper style={{ padding: "0.3rem" }}>
                     <SettingsBackupRestoreOutlined></SettingsBackupRestoreOutlined>
                  </IconButtonWrapper>
                  <IconButtonWrapper style={{ padding: "0.3rem" }}>
                     <CloudDownloadOutlined></CloudDownloadOutlined>
                  </IconButtonWrapper>
               </Flexbox>
            </Flexbox>

            <Flexbox>
               {renderPaginationStatus()}
               <PaginationButton onClick={() => setPage(page - 1)}>
                  <ChevronLeft></ChevronLeft>
               </PaginationButton>
               <Input
                  value={(page + 1).toString()}
                  disableUnderline
                  style={{
                     maxWidth: "35px",
                     width: "35px",
                     textAlign: "center",
                     fontSize: "12px",
                  }}
                  inputProps={{ style: { textAlign: "center" } }}
                  onChange={(e) => setPage(Number(+e.target.value - 1))}
               ></Input>
               {/* {Array(noOfPages)
                  .fill(0)
                  .map((_, i) => (
                     <PaginationNumberButton
                        onClick={() => setPage(i)}
                        {...(i === page
                           ? { variant: "contained", color: "secondary" }
                           : {})}
                     >
                        {i + 1}
                     </PaginationNumberButton>
                  ))} */}
               <PaginationButton onClick={() => setPage(page + 1)}>
                  <ChevronRight></ChevronRight>
               </PaginationButton>
               <Flexbox
                  ml={20}
                  onClick={() =>
                     dispatch({ setState: { drawer: CustomizeList } })
                  }
                  column
                  style={{ opacity: "0.7", cursor: "pointer" }}
               >
                  <ToggleOffOutlined
                     style={{ color: "#1D252C", fontSize: "18px" }}
                  ></ToggleOffOutlined>
                  <ToggleOn
                     style={{
                        color: "#1D252C",
                        marginTop: "-50%",
                        fontSize: 18,
                     }}
                  ></ToggleOn>
               </Flexbox>
            </Flexbox>
         </TableHeader>
         <Flexbox column fullWidth overflowAuto>
            <HeadingsRowWrapper>
               <Text>
                  <Checkbox
                     style={{
                        color: selectAllChecked ? "#deb316" : "",
                     }}
                     onChange={toggleSelectAll}
                  ></Checkbox>
               </Text>
               {headings.map((x) => (
                  <Text>{x}</Text>
               ))}
            </HeadingsRowWrapper>
            <Flexbox column fullWidth overflowAuto>
               {renderRows()}
            </Flexbox>
         </Flexbox>
      </Flexbox>
   );
};
export default PaginationTable;
