import React, { Fragment } from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   row: {
      flexDirection: "row",
      borderBottomColor: "#EDEDED",
      borderBottomWidth: 1,
      alignItems: "center",
   },
   sn: {
      width: "5%",
      paddingLeft: 8,
   },
   content: {
      width: "50%",
      textAlign: "left",
      paddingLeft: 8,
   },
   qty: {
      width: "10%",
      textAlign: "center",
      paddingRight: 8,
   },
   uom: {
      width: "5%",
   },
   rate: {
      width: "15%",
      textAlign: "center",
      paddingRight: 8,
   },
   amount: {
      width: "15%",
      textAlign: "right",
      paddingRight: 8,
   },
});

const InvoiceTableRow = ({ invoice }: any) => {
   const rowsa = invoice.tableData.rows.map((item: any, index: any) => (
      <View style={styles.row} key={index} wrap={false}>
         <Text style={styles.sn}>{item.sn}.</Text>
         <View style={styles.content}>
            <Text style={{ fontWeight: "heavy" }}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>HS CODE : {item.hashCode}</Text>
         </View>
         <Text style={styles.qty}>{item.qty}</Text>
         <Text style={styles.uom}>{item.uom}</Text>
         <Text style={styles.rate}>{item.unitPrice}</Text>
         <Text style={styles.amount}>{(item.qty * item.unitPrice).toFixed(2)}</Text>
      </View>
   ));
   return <Fragment>{rowsa}</Fragment>;
};

export default InvoiceTableRow;
