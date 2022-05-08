import React, { useState } from "react";
import styled from "styled-components";
import { toRem, colors } from "../Helpers/utils";
import Flexbox from "../StyledComponents/Flexbox";
import Text from "../StyledComponents/Text";
import CheckIcon from "@material-ui/icons/Check";
import AddIcon from "@material-ui/icons/Add";
interface IStage {
   label: string;
   icon: "plus" | "circle" | "correct" | "circle-full" | "empty";
}

interface StagesProps {
   stages: IStage[];
   defaultStage?: number;
}

const StageCircle = styled.div`
   padding: ${toRem(2.5)};
   height: 1.5rem;
   width: 1.5rem;
   border: ${toRem(2.5)} solid #dcdcdc;
   background: white;
   border-radius: 50%;
   margin-right: ${toRem(260)};
   transform: translateX(-50%);
   position: relative;
   &::after {
      content: "";
      width: ${toRem(270)};
      position: absolute;
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      height: ${toRem(3)};
      background: #dcdcdc;
      z-index: -1;
   }
   cursor: pointer;
`;
const HeaderLabel = styled;

const Header = styled(Flexbox)`
   position: relative;
   & *:last-child > ${StageCircle}::after {
      display: none;
   }
   & *:last-child > ${StageCircle} {
      margin-right: 0;
   }
   padding-bottom: 1rem;
`;

const SubCircle = styled.div`
   background: #dcdcdc;
   height: 100%;
   width: 100%;
   border-radius: 50%;
`;

const icons = {};

export const Stages: React.FC<StagesProps> = ({ stages, children, defaultStage = 0 }) => {
   let [stageNo, setStageNo] = useState(defaultStage);
   const childArr = React.Children.toArray(children);
   const renderIcon = (state: IStage) => {
      if (state.icon === "circle") {
         return (
            <StageCircle style={{ padding: toRem(2.5) }}>
               <SubCircle></SubCircle>
            </StageCircle>
         );
      }
      if (state.icon === "circle-full") {
         return (
            <StageCircle>
               <SubCircle></SubCircle>
            </StageCircle>
         );
      }
      if (state.icon === "correct") {
         return (
            <StageCircle
               style={{ background: "#dcdcdc", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
               <CheckIcon style={{ color: "white" }} fontSize="small" />
            </StageCircle>
         );
      }
      if (state.icon === "plus") {
         return (
            <StageCircle style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
               <AddIcon style={{ color: "#dcdcdc" }} />
            </StageCircle>
         );
      }
      if (state.icon === "empty") {
         return <StageCircle style={{ display: "flex", alignItems: "center", justifyContent: "center" }}></StageCircle>;
      }
      return null;
   };
   return (
      <>
         <Header justify={stages.length > 4 ? "start" : "center"} overflowAuto fullWidth pr={105 - 48} pl={105}>
            {stages.map((stage, i) => (
               <Flexbox align="start" column onClick={() => setStageNo(i)}>
                  {renderIcon(stage)}
                  <Text
                     mt={8}
                     fontFamily="semibold"
                     style={{
                        transform: "translateX(-50%)",
                        whiteSpace: "nowrap",
                        borderBottom: stageNo === i ? `${toRem(3)} solid ${colors.grayText}` : "",
                        paddingBottom: toRem(2),
                     }}
                  >
                     {stage.label}
                  </Text>
               </Flexbox>
            ))}
         </Header>
         <>{childArr[stageNo]}</>
      </>
   );
};
