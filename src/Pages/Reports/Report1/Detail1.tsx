import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   headerContainer: {
      width: 230,
   },
});

const Detail1 = ({ invoice }: any) => (
   <View style={styles.headerContainer}>
      <Text>Bank Name : {invoice.bankDetails.name}</Text>
      <Text>SWIFT Code # : {invoice.bankDetails.swiftCode}</Text>
      <Text>Currency : {invoice.bankDetails.currency}</Text>
   </View>
);

export default Detail1;
