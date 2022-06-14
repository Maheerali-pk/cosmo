import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   headerContainer: {
      width: 180,
   },
   text: {
      paddingTop: 1,
      borderBottom: 1,
   },
});

const Currency = ({ invoice }: any) => (
   <View style={styles.headerContainer}>
      <Text style={styles.text}>Currency : {invoice.currency}</Text>
      <Text style={styles.text}>Country of Origin : {invoice.country}</Text>
      <Text style={styles.text}>Shipping Terms : {invoice.shippingTerms}</Text>
   </View>
);

export default Currency;
