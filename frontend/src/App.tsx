import { Navigate, Route, Routes } from "react-router-dom";
import { protectRoute } from "@hoc/protectedRoute";
import { ClientsAddPage, ClientsListPage, DashboardPage, LoginPage, NoticeAddPage, NoticeListPage, PhysicalCopiesBulkAddPage, PhysicalCopiesListPage, PhysicalCopiesSingleAddPage, ReportsPage, TemplateAddPage, TemplateListPage } from "@pages/index";

const ProtectedDashboard = protectRoute(DashboardPage);
const ProtectedNoticeAdd = protectRoute(NoticeAddPage);
const ProtectedNoticeList = protectRoute(NoticeListPage);
const ProtectedTemplateAdd = protectRoute(TemplateAddPage);
const ProtectedTemplateList = protectRoute(TemplateListPage);
const ProtectedClientsAdd = protectRoute(ClientsAddPage);
const ProtectedClientsList = protectRoute(ClientsListPage);
const ProtectedPhysicalCopiesSingleAdd = protectRoute(PhysicalCopiesSingleAddPage);
const ProtectedPhysicalCopiesBulkAdd = protectRoute(PhysicalCopiesBulkAddPage);
const ProtectedPhysicalCopiesList = protectRoute(PhysicalCopiesListPage);
const ProtectedReports = protectRoute(ReportsPage);

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<ProtectedDashboard />} />
        <Route path="/notice-add" element={<ProtectedNoticeAdd />} />
        <Route path="/notice-list" element={<ProtectedNoticeList />} />
        <Route path="/template-add" element={<ProtectedTemplateAdd />} />
        <Route path="/template-list" element={<ProtectedTemplateList />} />
        <Route path="/clients-add" element={<ProtectedClientsAdd />} />
        <Route path="/clients-list" element={<ProtectedClientsList />} />
        <Route path="/physical-copies-single-add" element={<ProtectedPhysicalCopiesSingleAdd />} />
        <Route path="/physical-copies-bulk-add" element={<ProtectedPhysicalCopiesBulkAdd />} />
        <Route path="/physical-copies-list" element={<ProtectedPhysicalCopiesList />} />
        <Route path="/reports" element={<ProtectedReports />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
};
