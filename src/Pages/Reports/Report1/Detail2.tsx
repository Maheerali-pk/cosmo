import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   headerContainer: {
      width: 230,
      marginLeft: 20,
   },
});

const Detail2 = ({ invoice }: any) => (
   <View style={styles.headerContainer}>
      <Text>IBAN # : {invoice.bankDetails.IBAN}</Text>
      <Text>Account Title : {invoice.bankDetails.accountTitle}</Text>
      <Text>Bank Address : {invoice.bankDetails.address}</Text>
   </View>
);

export default Detail2;
