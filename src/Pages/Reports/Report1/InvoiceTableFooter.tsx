import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   row: {
      flexDirection: "row",
      backgroundColor: "#EDEDED",
      borderBottomColor: "#EDEDED",
      borderBottomWidth: 1,
      alignItems: "center",
      height: 24,
      fontSize: 12,
      fontStyle: "bold",
   },
   description: {
      width: "65%",
      textAlign: "center",
      paddingRight: 8,
   },
   currency: {
      width: "20%",
      textAlign: "center",
   },
   total: {
      width: "15%",
      textAlign: "right",
      paddingRight: 8,
   },
});

const InvoiceTableFooter = ({ invoice }: any) => {
   const total = invoice.tableData.rows
      .map((item: any) => item.qty * item.unitPrice)
      .reduce((accumulator: any, currentValue: any) => accumulator + currentValue, 0);
   return (
      <View style={styles.row}>
         <Text style={styles.description}>TOTAL : {invoice.tableData.totalString}</Text>
         <Text style={styles.currency}>{invoice.tableData.currency}</Text>
         <Text style={styles.total}>{Number.parseFloat(total).toFixed(2)}</Text>
      </View>
   );
};

export default InvoiceTableFooter;
