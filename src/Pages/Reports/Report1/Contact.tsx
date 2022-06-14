import React from "react";
import { Image, StyleSheet, View, Text } from "@react-pdf/renderer";

const styles = StyleSheet.create({
   container: {
      width: "100%",
      flexDirection: "row",
      paddingHorizontal: 30,
      justifyContent: "space-between",
   },
   logo: {
      padding: 0,
      width: 15,
      height: 15,
   },
   subContainer: {
      fontSize: 9,
      width: "24%",
      flexDirection: "row",
   },
   text: {
      marginTop: 2,
      marginLeft: 3,
      textAlign: "left",
      left: 0,
      width: "90%",
   },
});

const Contact = ({ invoice }: any) => (
   <View style={styles.container}>
      <View style={styles.subContainer}>
         <Image style={styles.logo} src="https://img.icons8.com/ios-filled/50/undefined/phone.png" />
         <Text style={styles.text}>+92 321 1234567</Text>
      </View>
      <View style={styles.subContainer}>
         <Image style={styles.logo} src="https://img.icons8.com/pastel-glyph/64/undefined/new-post--v1.png" />
         <Text style={styles.text}>info@website.com</Text>
      </View>
      <View style={[styles.subContainer, { width: "52%" }]}>
         <Image
            style={styles.logo}
            src="https://img.icons8.com/external-kmg-design-glyph-kmg-design/32/undefined/external-map-back-to-school-kmg-design-glyph-kmg-design.png"
         />
         <Text style={styles.text}>123 main street, Jabel Ali Free Zone South Dubai - UAE</Text>
      </View>
   </View>
);

export default Contact;
