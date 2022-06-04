import styled, { css } from "styled-components";
import ReportViewer from "../../../Components/ReportViewer";
import jsPDF from "jspdf";
import { fonts, toEm, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Text from "../../../StyledComponents/Text";
import Footer from "./Footer";
import Header from "./Header";
import Table from "./Table";
import { Report1Props } from "./Report1";
import { useGlobalContext } from "../../../Contexts/GlobalContext/GlobalContext";
import React, { useEffect, useRef } from "react";

const StampWrapper = styled(Flexbox)`
   background: #707070;
   width: 7.5em;
   height: 5em;
   border-radius: 1.125em;
   ${Text} {
   }
`;

const PageWrapper = styled(Grid)<{ printing: boolean }>`
   position: relative;
   grid-template-rows: min-content min-content auto;
   ${Text} {
      color: black;
      font-family: ${fonts.semibold};
   }

   height: 100%;
   width: 100%;
   /* ${(p) =>
      p.printing &&
      css`
         font-size: 405.2287581699346%;
         height: 2480px;
         width: 3508px;
      `}; */
   @media only print {
      width: 100%;
      height: 100%;
   }
   background: white;
`;

interface IField {
   value: string;
   label: string;
}

const Grid1Field: React.FC<IField> = ({ label, value }) => {
   return (
      <Grid columns="4em 1.5em auto" em>
         <Text em fontFamily="semibold" size={11}>
            {label}
         </Text>
         <Text em size={11}>
            :
         </Text>
         <Text em size={11}>
            {value}
         </Text>
      </Grid>
   );
};
const Grid2Field: React.FC<IField> = ({ label, value }) => {
   return (
      <Grid columns="7em 1.5em auto" em style={{ borderBottom: "0.1em solid black" }} fullWidth>
         <Text em fontFamily="semibold" size={11}>
            {label}
         </Text>
         <Text em size={11}>
            :
         </Text>
         <Text em size={11}>
            {value}
         </Text>
      </Grid>
   );
};
const Grid3Field: React.FC<IField> = ({ label, value }) => {
   return (
      <Grid columns="5em 1.5em auto" em fullWidth>
         <Text em fontFamily="semibold" size={11}>
            {label}
         </Text>
         <Text em size={11}>
            :
         </Text>
         <Text em size={11}>
            {value}
         </Text>
      </Grid>
   );
};

const Page1: React.FC<Report1Props> = (props) => {
   const [state] = useGlobalContext();
   const wrapperRef = useRef<HTMLDivElement>(null);
   useEffect(() => {}, []);
   const download = () => {};
   return (
      <PageWrapper id="page1" onClick={download} ref={wrapperRef} printing={state.isPrinting} fullWidth>
         {/* <Header></Header> */}
         <Flexbox column px={50} py={32} fullWidth em>
            <Grid noOfColumns={2} fullWidth em mb={14}>
               <Text size={12} em>
                  Martin Dow Marker Limited (Formerly
               </Text>
               <Grid1Field label="Date" value={props.date}></Grid1Field>
               <Text em size={12}>
                  Merck Pvt. Ltd)
               </Text>
               <Grid1Field label="Invoice #" value={props.invoiceNo}></Grid1Field>
               <Text em size={12}>
                  7, Jail Road Quetta Pakistan
               </Text>
               <Grid1Field label="PFI #" value={props.PFINo}></Grid1Field>
               <Text em size={12}>
                  Ph # +92 21 111 523 523
               </Text>
            </Grid>
            <Grid columns="1fr 2fr" colGap={toEm(54)} fullWidth>
               <Flexbox column fullWidth>
                  <Grid2Field label="Currency" value={props.currency}></Grid2Field>
                  <Grid2Field label="Country Of Origin" value={props.country}></Grid2Field>
                  <Grid2Field label="Shipping Terms" value={props.shippingTerms}></Grid2Field>
               </Flexbox>
               <Flexbox column fullWidth>
                  <Grid2Field label="Payment Terms" value={props.paymentTerms}></Grid2Field>
                  <Grid2Field label="Loading Port" value={props.landingPort}></Grid2Field>
                  <Grid2Field label="Destination Port" value={props.destinationPort}></Grid2Field>
               </Flexbox>
            </Grid>
            <Table {...props.tableData}></Table>
            <Flexbox background="#EDEDED" fullWidth padding="0.2em" em mb={4}>
               <Text size={11} fontFamily="bold">
                  BACK ACCOUNT DETAILS:
               </Text>
            </Flexbox>
            <Grid columns="1fr 1.5fr" fullWidth>
               <Flexbox column fullWidth>
                  <Grid3Field label="Bank Name" value={props.bankDetails.name}></Grid3Field>
                  <Grid3Field label="Swift Code#" value={props.bankDetails.swiftCode}></Grid3Field>
                  <Grid3Field label="Currecy" value={props.bankDetails.currency}></Grid3Field>
               </Flexbox>
               <Flexbox column fullWidth>
                  <Grid3Field label="IBAN #" value={props.bankDetails.IBAN}></Grid3Field>
                  <Grid3Field label="Account Title" value={props.bankDetails.accountTitle}></Grid3Field>
                  <Grid3Field label="Bank Address" value={props.bankDetails.address}></Grid3Field>
               </Flexbox>
            </Grid>
            <Grid columns="1.3fr 1fr" fullWidth>
               <Flexbox fullWidth column>
                  <Flexbox background="#EDEDED" fullWidth padding="0.2em" em mb={4} mt={14}>
                     <Text size={11} fontFamily="bold">
                        SPECIAL INSTRUCTIONS:
                     </Text>
                  </Flexbox>
                  <Text size={11} em>
                     Formerly MERCK (PVT) LIMITED / D-7 Shaheed-e-Millat Road Karachi, Pakistan
                     <br></br>
                     <br></br>
                     Bank Contract No. 285IROC180570008 dated February 26, 2018.
                     <br />
                     Policy No. 2591046644/01/2017
                     <br />
                     <br />
                     Batch No. Mfg. Date Exp. Date
                     <br></br>
                     {props.footerRows.map((x) => (
                        <>
                           {x}
                           <br></br>
                        </>
                     ))}
                  </Text>
               </Flexbox>
               <Flexbox px={32} em py={32}>
                  <StampWrapper justify="center" align="center">
                     <Text color="black" size={26} em fontFamily="bold">
                        STAMP
                     </Text>
                  </StampWrapper>
               </Flexbox>
            </Grid>
         </Flexbox>

         {/* <Footer {...props}></Footer> */}
      </PageWrapper>
   );
};

export default Page1;
