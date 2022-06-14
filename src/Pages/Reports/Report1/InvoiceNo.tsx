import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   headerContainer: {
      width: 190,
   },
});

const InvoiceNo = ({ invoice }: any) => (
   <View style={styles.headerContainer}>
      <Text>Date : {invoice.date}</Text>
      <Text>Invoice # : {invoice.invoiceNo}</Text>
      <Text>PFI # : {invoice.PFINo}</Text>
   </View>
);

export default InvoiceNo;
