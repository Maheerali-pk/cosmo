import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   headerContainer: {
      width: 250,
   },
   text: {
      paddingTop: 1,
      borderBottom: 1,
   },
});

const Payment = ({ invoice }: any) => (
   <View style={styles.headerContainer}>
      <Text style={styles.text}>Payment Terms : {invoice.paymentTerms}</Text>
      <Text style={styles.text}>Loading Port : {invoice.landingPort}</Text>
      <Text style={styles.text}>Destination Port : {invoice.destinationPort}</Text>
   </View>
);

export default Payment;
