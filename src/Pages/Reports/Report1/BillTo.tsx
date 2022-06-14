import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   headerContainer: {
      width: 180,
   },
});

const BillTo = ({ invoice }: any) => (
   <View style={styles.headerContainer}>
      <Text>{invoice.company}</Text>
      <Text>{invoice.address}</Text>
      <Text>{invoice.phone}</Text>
   </View>
);

export default BillTo;
