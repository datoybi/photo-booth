import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import Login from '../Auth/Login';
import SearchPage from '../Entry/SearchPage';

export const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/login" element={<Login />} />
    </ReactRouterRoutes>
  );
};
