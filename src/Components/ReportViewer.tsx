import jsPDF from "jspdf";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";
import ButtonPrimary from "../StyledComponents/ButtonPrimary";
import Flexbox, { FlexboxProps } from "../StyledComponents/Flexbox";
import html2canvas from "html2canvas";
import { useGlobalContext } from "../Contexts/GlobalContext/GlobalContext";
interface ReportViewerProps {
   initialZoom: number;
   pages: React.FC<{ [k in string]: any }>[];
   reportProps: { [k in string]: any };
}
const PageWrapper = styled.div<{ height: number }>`
   /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); */
   width: 100%;
   height: ${(p) => p.height}px;
   @media only print {
      height: 100vh !important;
      margin-bottom: 0 !important;
   }
`;
const ToolbarWrapper = styled(Flexbox)`
   @media print {
      display: none !important;
   }
   position: fixed;
   z-index: 1;
   box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
`;

const ListWrapper = styled(Flexbox)`
   @media only print {
      width: 100% !important;
      padding: 0 !important;
   }
`;

const Wrapper = styled(Flexbox)<{ printing: boolean; initialZoom: number }>`
   background: gray;
   ${ToolbarWrapper} {
      /* ${(p) => p.printing && `display: none !important`}; */
      @media print {
         display: none !important;
      }
   }
   ${ListWrapper} {
      ${(p) =>
         p.printing &&
         css`
            padding: 0 !important;
         `};

      @media only print {
         width: 100% !important;
         font-size: ${(p) => p.initialZoom}% !important;
         padding: 0 !important;
         gap: 0 !important;
      }
   }
   ${PageWrapper} {
      ${(p) =>
         p.printing &&
         css`
            margin-bottom: 0 !important;
         `};
      @media only print {
         height: 100vh !important;
         margin-bottom: 0 !important;
      }
   }
`;
const ReportViewer: React.FC<ReportViewerProps> = ({ initialZoom, pages, reportProps }) => {
   const [zoom, setZoom] = useState(100);
   const [state, dispatch] = useGlobalContext();
   const toPrintRef = useRef<HTMLDivElement>(null);
   const exportAsPDF = () => {
      dispatch({ setState: { isPrinting: true } });
   };
   useEffect(() => {
      if (state.isPrinting && toPrintRef.current) {
         const doc = new jsPDF("portrait", "px", [3508, 2480]);

         doc.html(toPrintRef.current, {
            x: 0,
            y: 0,
            callback: () => {
               doc.save();
               dispatch({ setState: { isPrinting: false } });
            },
         });
      }
   });
   // useEffect(() => {
   //    if (state.isPrinting) {
   //       html2canvas(document.body).then((canvas) => {
   //          const doc = new jsPDF("p", "px", [3508, 2480]);
   //          const imgData = canvas.toDataURL();
   //          console.log("hello");
   //          // doc.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height, "", "FAST", 0);
   //          for (let i = 0; i < pages.length; i++) {
   //             const onePageCanvas = document.createElement("canvas");
   //             const ctx = onePageCanvas.getContext("2d");
   //             onePageCanvas.setAttribute("height", "3508");
   //             onePageCanvas.setAttribute("width", "2480");
   //             // onePageCanvas.width = 2480;
   //             ctx?.drawImage(canvas, 0, 3508 * i, 2480, 3508, 0, 0, 2480, 3508);
   //             const imgData = onePageCanvas.toDataURL();

   //             if (i !== 0) {
   //                console.log("imgdata", imgData);
   //                doc.addPage();
   //                doc.setPage(i);
   //             }
   //             doc.addImage(imgData, "PNG", 0, 0, 2480, 3508, "", "FAST", 0);
   //          }

   //          doc.save("res2.pdf");
   //          dispatch({ setState: { isPrinting: false } });

   //          // var source = window.document.getElementsByTagName("body")[0];
   //          // doc.html(source, {
   //          //    callback: function (doc) {
   //          //    },
   //          //    x: 0,
   //          //    y: 0,
   //          //    width: 2480,
   //          //    windowWidth: 2480,
   //          // });
   //          // doc.addFont("SegoeUI.ttf", "SegoeUI", "normal");
   //          // doc.setFont("SegoeUI");
   //       });
   //    }
   // }, [dispatch, pages.length, state.isPrinting]);

   return (
      <Wrapper initialZoom={initialZoom} printing={state.isPrinting} column>
         <ToolbarWrapper mb={50} gap={16} style={{ background: "white" }} fullWidth>
            <ButtonPrimary onClick={() => setZoom(zoom + initialZoom * 0.1)}>+</ButtonPrimary>
            <ButtonPrimary onClick={() => setZoom(zoom - initialZoom * 0.1)}>-</ButtonPrimary>
            <ButtonPrimary onClick={() => window.print()}>Print</ButtonPrimary>
            <ButtonPrimary onClick={() => exportAsPDF()}>Export as PDF</ButtonPrimary>
         </ToolbarWrapper>
         <ListWrapper
            column
            style={{
               fontSize: state.isPrinting ? initialZoom + "%" : zoom + "%",
               width: state.isPrinting ? 2408 : (zoom / initialZoom) * 2480,
               height: state.isPrinting ? pages.length * 3507 : "",
               background: "gray",
               padding: state.isPrinting ? 0 : "5rem",
               boxSizing: "content-box",
               margin: "auto",
               gap: state.isPrinting ? 0 : "4rem",
            }}
            ref={toPrintRef}
         >
            {pages.map((Page) => (
               <PageWrapper height={state.isPrinting ? 3508 : (zoom / initialZoom) * 3508}>
                  <Page {...reportProps} customRef={toPrintRef}></Page>
               </PageWrapper>
            ))}
         </ListWrapper>
      </Wrapper>
   );
};

export default ReportViewer;
