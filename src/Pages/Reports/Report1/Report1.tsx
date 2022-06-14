import { PDFViewer } from "@react-pdf/renderer";
import Invoice from "./Invoice";

export const Report3 = (props: any) => {
   return (
      <PDFViewer style={{ width: "100%", height: "100vh" }} className="app">
         <Invoice invoice={props.data} />
      </PDFViewer>
   );
};
