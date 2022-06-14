import React from 'react';
import {Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
   
    titleContainer:{
        flexDirection: 'row',
        marginTop: 12
    },
    reportTitle:{
       fontFamily: 'Helvetica-Bold',
        fontSize: 19,
        textAlign: 'center',
        textTransform: 'uppercase',
    }
  });


  const InvoiceThankYouMsg = () => (
    <View style={styles.titleContainer}>
        <Text style={styles.reportTitle}>COMPANY NAME</Text>
    </View>
  );
  
  export default InvoiceThankYouMsg