import {
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "../layouts/default";
import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RequireAuth } from "./ProtectorRoutes";

export default function RoutesProvider() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Route>
    </Routes>  
  );
}