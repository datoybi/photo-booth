import { Route, Routes as ReactRouterRoutes } from 'react-router-dom';
import Login from '../Auth/Login';
import SearchPage from '../Entry/SearchPage';

export const Routes = ({ imageData }: any) => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<SearchPage imageData={imageData} />} />
      <Route path="/login" element={<Login />} />
    </ReactRouterRoutes>
  );
};
