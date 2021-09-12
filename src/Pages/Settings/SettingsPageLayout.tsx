import styled from "styled-components";
import Layout from "../../Components/Layout";
import { colors, toRem } from "../../Helpers/utils";
import SettingsSidebar from "./SettingsSidebar";
const InnerContentWrapper = styled.div<{ isSidebarOpen?: boolean }>`
   display: grid;
   grid-template-columns: ${(p) => `${p.isSidebarOpen ? toRem(210) : "min-content"} auto`};
   width: 100%;
   padding-top: ${toRem(21)};
`;
const PageWrapper = styled.div`
   display: grid;
   height: 93.5vh;
   width: 100%;
   min-width: 100%;
   border-left: 2px solid ${colors.pageOutlineSkyblue};
   overflow: auto;
   grid-template-rows: min-content min-content min-content auto;
`;
const SettingsPageLayout: React.FC = ({ children }) => {
   return (
      <Layout navbarItems={[]}>
         <InnerContentWrapper className="bottom-area">
            <SettingsSidebar></SettingsSidebar>
            {children}
         </InnerContentWrapper>
      </Layout>
   );
};
export default SettingsPageLayout;
