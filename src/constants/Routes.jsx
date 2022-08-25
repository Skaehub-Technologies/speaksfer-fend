import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLinks } from './links';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Registration = React.lazy(() => import('../pages/Registration'));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route exact path={publicLinks.home} element={<Home />} />
          <Route path={publicLinks.Login} element={<Login />} />
          <Route path={publicLinks.Registration} element={<Registration />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
