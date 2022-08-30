import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLinks } from './links';
import { privateLinks } from './PrivateLinks';
import RequireAuth from '../components/RequireAuth';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Admin = React.lazy(() => import('../pages/Admin'));
const Editor = React.lazy(() => import('../pages/Editor'));
const Unauthorized = React.lazy(() => import('../pages/Unauthorized'));
const Registration = React.lazy(() => import('../pages/Registration'));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path={publicLinks.home} element={<Home />} />
          <Route path={publicLinks.Login} element={<Login />} />
          <Route path={publicLinks.Registration} element={<Registration />} />
          <Route path={publicLinks.Unauthorized} element={<Unauthorized />} />
          <Route element={<RequireAuth />}>
            <Route path={privateLinks.Admin} element={<Admin />} />
          </Route>
          <Route element={<RequireAuth />}>
            <Route path={privateLinks.Editor} element={<Editor />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
