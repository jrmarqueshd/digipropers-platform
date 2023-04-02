import {
  Routes,
  Route,
} from "react-router-dom";
import { Layout } from "../layouts/default";
import { Dashboard } from "../pages/dashboard";
import { LoginPage } from "../pages/login";
import { RouteProtector } from "./ProtectorRoutes";

export default function RoutesProvider() {
  return (
    <Routes>
      <Route 
        path="/login" 
        element={
          <RouteProtector protectType="unAuth">
            <LoginPage />
          </RouteProtector>
        } 
      />
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <RouteProtector protectType="auth">
              <Dashboard />
            </RouteProtector>
          }
        />
      </Route>
    </Routes>  
  );
}