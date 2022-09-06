import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicLinks, privateLinks } from './links';
import RequireAuth from '../components/RequireAuth';
import Navbar from '../layout/NavBar';
import PersistLogin from '../components/PersistLogin';

const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/Login'));
const Admin = React.lazy(() => import('../pages/Admin'));
const Editor = React.lazy(() => import('../pages/Editor'));
const EditProfile = React.lazy(() => import('../pages/EditProfile'));
const Profile = React.lazy(() => import('../pages/Profile'));
const Unauthorized = React.lazy(() => import('../pages/Unauthorized'));
const Registration = React.lazy(() => import('../pages/Registration'));
const PasswordReset = React.lazy(() => import('../pages/PasswordReset'));

function BaseRouter() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Navbar />
        <Routes>
          <Route exact path={publicLinks.HOME} element={<Home />} />
          <Route path={publicLinks.LOGIN} element={<Login />} />
          <Route path={publicLinks.REGISTRATION} element={<Registration />} />
          <Route path={publicLinks.UNAUTHORIZED} element={<Unauthorized />} />
          <Route path={publicLinks.PROFILE} element={<Profile />} />
          <Route path={publicLinks.PASSWORDRESET} element={<PasswordReset />} />
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path={privateLinks.ADMIN} element={<Admin />} />
              <Route path={privateLinks.EDITOR} element={<Editor />} />
              <Route path={privateLinks.EDITPROFILE} element={<EditProfile />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default BaseRouter;
