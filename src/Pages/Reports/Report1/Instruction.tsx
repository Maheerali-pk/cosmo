import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   headerContainer: {
      width: "60%",
      marginLeft: 29,
      marginRight: 29,
      marginTop: 14,
   },
   account_title: {
      paddingTop: 2,
      fontFamily: "Helvetica-Bold",
      backgroundColor: "#EDEDED",
   },
});

const Instruction = ({ invoice }: any) => (
   <View style={styles.headerContainer}>
      <Text style={styles.account_title}>SPECIAL INSTRUCTIONS:</Text>
      <Text>Formerly MERCK (PVT) LIMITED / D-7 Shaheed-e-Millat Road Karachi, Pakistan</Text>
      <Text>Bank Contract No. 285IROC180570008 dated February 26, 2018.</Text>
      <Text>Batch No. Mfg. Date Exp. Date</Text>
      <Text>23978009 15.03.2018 15.03.2021</Text>
      <Text>23978009 15.03.2018 15.03.2021</Text>
      <Text>23978009 15.03.2018 15.03.2021</Text>
      <Text>23978009 15.03.2018 15.03.2021</Text>
   </View>
);

export default Instruction;
