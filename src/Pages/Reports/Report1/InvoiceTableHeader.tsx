import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const borderColor = '#EDEDED'
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderBottomColor: '#EDEDED',
        backgroundColor: '#EDEDED',
        borderBottomWidth: 1,
        alignItems: 'center',
        height: 24,
        textAlign: 'center',
        fontFamily: 'Helvetica-Bold',
        flexGrow: 1,
    },
    sn:{
        width:'5%'
    },
    description: {
        fontWeight: 'heavy',
        width: '50%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    qty: {
        width: '10%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    uom: {
        width: '5%'
    },
    rate: {
        width: '15%',
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
    amount: {
        width: '15%'
    },
    
  });

  const InvoiceTableHeader = () => (
    <View style={styles.container}>
        <Text style={styles.sn}>SN</Text>
        <Text style={styles.description}>PRODUCT NAME & DESCRIPTION</Text>
        <Text style={styles.qty}>Qty</Text>
        <Text style={styles.uom}>UOM</Text>
        <Text style={styles.rate}>Unit Price</Text>
        <Text style={styles.amount}>Total Amount</Text>
    </View>
  );
  
  export default InvoiceTableHeader