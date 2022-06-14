import React from "react";
import { View, StyleSheet } from "@react-pdf/renderer";
import InvoiceTableHeader from "./InvoiceTableHeader";
import InvoiceTableRow from "./InvoiceTableRow";
import InvoiceTableFooter from "./InvoiceTableFooter";

const styles = StyleSheet.create({
   tableContainer: {
      flexDirection: "row",
      flexWrap: "wrap",
      marginTop: 24,
      borderWidth: 1,
      borderColor: "#000000",
      fontSize: 9,
   },
});

const InvoiceItemsTable = ({ invoice }: any) => (
   <View style={styles.tableContainer}>
      <InvoiceTableHeader />
      <InvoiceTableRow invoice={invoice} />
      {/* <InvoiceTableBlankSpace rowsCount={ tableRowsCount - invoice.items.length} /> */}
      <InvoiceTableFooter invoice={invoice} />
   </View>
);

export default InvoiceItemsTable;
