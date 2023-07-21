import { Route, Routes as ReactRouterRoutes, Navigate } from "react-router-dom";
import Login from "../Auth/Login";

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/login" element={<Login />} />
    </ReactRouterRoutes>
  );
};
