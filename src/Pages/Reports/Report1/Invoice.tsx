import React from "react";
import { Page, Document, Image, StyleSheet, View, Text } from "@react-pdf/renderer";
import BillTo from "./BillTo";
import InvoiceNo from "./InvoiceNo";
import InvoiceItemsTable from "./InvoiceItemsTable";
import InvoiceThankYouMsg from "./InvoiceThankYouMsg";
import logo from "../../../../src/logo512.png";
import Currency from "./Currency";
import Payment from "./Payment";
import Detail1 from "./Detail1";
import Detail2 from "./Detail2";
import Instruction from "./Instruction";
import Brand from "./Brand";
import Contact from "./Contact";

const styles = StyleSheet.create({
   page: {
      fontFamily: "Helvetica",
      fontSize: 11,
      paddingTop: 110,
      paddingLeft: 22,
      paddingRight: 22,
      paddingBottom: 113,
      lineHeight: 1.5,
      flexDirection: "column",
   },
   logo: {
      top: 15,
      width: 120,
      height: 74,
   },
   header: {
      flexDirection: "row",
      position: "absolute",
      left: 30,
   },
   bill_no: {
      flexDirection: "row",
      marginTop: 14,
      marginLeft: 29,
      marginRight: 29,
      justifyContent: "space-between",
   },
   currency_payment: {
      flexDirection: "row",
      marginTop: 14,
      marginLeft: 29,
      marginRight: 29,
      justifyContent: "space-between",
   },
   block1: {
      borderRadius: 3,
      top: 57.5,
      width: 19,
      height: 5,
      backgroundColor: "#A81FA8",
   },
   block2: {
      borderRadius: 3,
      top: 57.5,
      width: 290,
      height: 5,
      backgroundColor: "#A81FA8",
   },
   block3: {
      marginVertical: "auto",
      width: "100%",
      borderRadius: 3,
      height: 5,
      backgroundColor: "#A81FA8",
   },
   title: {
      fontFamily: "Helvetica-Bold",
      paddingLeft: 5,
      paddingRight: 5,
      top: 48,
      fontSize: 19,
      fontWeight: 900,
   },
   table: {
      marginTop: 5,
      marginLeft: 29,
      marginRight: 29,
   },
   account: {
      fontSize: 9,
      flexDirection: "row",
      marginTop: 2,
      marginLeft: 31,
      marginRight: 31,
      justifyContent: "flex-start",
   },
   account_title: {
      fontFamily: "Helvetica-Bold",
      marginLeft: 29,
      marginRight: 29,
      marginTop: 14,
      paddingTop: 2,
      alignContent: "center",
      backgroundColor: "#EDEDED",
   },
   sign: {
      position: "absolute",
      fontSize: 9,
      flexDirection: "row",
      marginLeft: 60,
      marginRight: 60,
      bottom: 120,
      justifyContent: "flex-start",
   },

   underLine: {
      borderBottom: 1,
   },
   hint: {
      fontSize: 8,
      paddingHorizontal: 60,
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 10,
   },
   footer: {
      position: "absolute",

      bottom: 10,
      left: 0,
      right: 0,
      paddingHorizontal: 10,
      justifyContent: "center",
      width: "100vw",
      flexDirection: "column",
   },
   spec: {
      paddingHorizontal: 5,
   },
});

const Invoice = ({ invoice }: any) => (
   <Document>
      <Page size="A4" style={styles.page} wrap>
         <View style={styles.header} fixed>
            <View style={[styles.block1]} />
            <Text style={styles.title}>INVOICE</Text>
            <View style={[styles.block2]} />
            <Image style={styles.logo} src={logo} />
         </View>
         <View style={styles.bill_no}>
            <BillTo invoice={invoice} />
            <InvoiceNo invoice={invoice} />
         </View>
         <View style={styles.currency_payment}>
            <Currency invoice={invoice} />
            <Payment invoice={invoice} />
         </View>
         <View style={styles.table}>
            <InvoiceItemsTable invoice={invoice} />
         </View>
         <Text style={styles.account_title} wrap={false}>
            BANK ACCOUNT DETAILS:
         </Text>
         <View style={styles.account} wrap={false}>
            <Detail1 invoice={invoice} />
            <Detail2 invoice={invoice} />
         </View>
         <View style={styles.spec} wrap={false}>
            <Instruction />
            <Brand />
         </View>
         <View style={styles.sign}>
            <Text style={styles.underLine}> Prepared By : </Text>
            <Text style={[styles.underLine, { marginLeft: 200 }]}> Approved By : </Text>
         </View>
         <Text style={{ position: "absolute", bottom: 105, marginLeft: 60, fontSize: 9 }}>Fawad Ahmed</Text>

         <View style={styles.footer} fixed>
            <View style={styles.hint}>
               <Text style={{ fontFamily: "Helvetica-Oblique" }}>
                  This is a computer generated document and electronically approved.
               </Text>
               <Text
                  style={[styles.underLine]}
                  render={({ pageNumber, totalPages }: any) => `Page ${pageNumber} of ${totalPages}`}
                  fixed
               />
            </View>
            <View style={[styles.block3]} />
            <InvoiceThankYouMsg />
            <Contact />
         </View>
      </Page>
   </Document>
);

export default Invoice;
