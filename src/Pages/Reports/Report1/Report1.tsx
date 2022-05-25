import styled from "styled-components";
import { StringMappingType } from "typescript";
import ReportViewer from "../../../Components/ReportViewer";
import { fonts, toEm, toRem } from "../../../Helpers/utils";
import Flexbox from "../../../StyledComponents/Flexbox";
import Grid from "../../../StyledComponents/Grid";
import Text from "../../../StyledComponents/Text";
import Footer from "./Footer";
import Header from "./Header";
import Page1 from "./Page1";
import Table from "./Table";

export interface Report1Props {
   date: string;
   invoiceNo: string;
   PFINo: string;
   currency: string;
   country: string;
   shippingTerms: string;
   paymentTerms: string;
   landingPort: string;
   destinationPort: string;
   tableData: IReport1Table;
   bankDetails: IBankDetails;
   preparedBy: string;
   footerRows: string[];
}

export interface IReport1Table {
   rows: IRow[];
   totalString: string;
   currency: string;
   total: number;
}

interface IBankDetails {
   name: string;
   swiftCode: string;
   currency: string;
   IBAN: string;
   accountTitle: string;
   address: string;
}

export interface IRow {
   sn: number;
   name: string;
   description: JSX.Element;
   qty: number;
   uom: string;
   unitPrice: number;
   totalAmount: number;
}

const StampWrapper = styled(Flexbox)`
   background: #707070;
   width: 7.5em;
   height: 5em;
   border-radius: 1.125em;
   ${Text} {
      transform: matrix(0.92, -0.39, 0.39, 0.92, 0, 0);
   }
`;

const PageWrapper = styled(Flexbox)`
   ${Text} {
      color: black;
      font-family: ${fonts.semibold};
   }
   width: 2480px;
   min-height: 3508px;
   @media only print {
      width: 100%;
      height: 100%;
   }
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

console.log("hi");
const Report1: React.FC<Report1Props> = (props) => {
   return (
      <ReportViewer
         pages={[Page1 as React.FC<{ [k in string]: any }>]}
         reportProps={props}
         initialZoom={405.2287581699346}
      ></ReportViewer>
   );
};

export default Report1;
