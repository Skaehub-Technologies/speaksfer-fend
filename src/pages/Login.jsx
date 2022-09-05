/* eslint-disable prettier/prettier */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../api/axios';
import { urls } from '../constants/links';
import useAuth from '../hooks/useAuth';
import jwtDecode from '../utils/jwt_decode';
import LocalStorageService from '../utils/local_storage';

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { setAuth } = useAuth();
  const from = location.state?.from?.pathname || '/';
  return (
    <div className="w-full flex justify-center p-10 bg-gray-300 h-screen">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async (values) => {
          try {
            const response = await axios.post(urls.LOGIN, values);
            LocalStorageService.setToken(response.data);
            setAuth({ access: response.data.access, user_id: jwtDecode(response.data.access) });
            toast.success('successfully logged in');
            navigate(from, { replace: true });
          } catch (error) {
            toast.error('Incorrect email or password');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-dark rounded p-2 shadow px-4 m-auto">
            <h1 className="text-white text-xl text-center p-3">Login</h1>
            <div className="text-white flex flex-col mb-2 pb-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Field name="email" className="rounded bg-light-grey outline-none px-2" />
              {touched.email && errors.email && (
                <div className="my-1 text-xs text-red-700 italic">{errors.email}</div>
              )}
            </div>
            <div className="text-white flex flex-col mb-2">
              <label htmlFor="password" className="text-sm">
                Password
              </label>
              <Field
                type="password"
                name="password"
                className="rounded bg-light-grey outline-none px-2"
              />
              {touched.password && errors.password && (
                <div className="my-1 text-xs text-red-700 italic">{errors.password}</div>
              )}
            </div>
            <button
              type="submit"
              className="rounded shadow bg-blue-700 p-1 text-white hover:opacity-90 w-full"
            >
              Submit
            </button>
            <p className="text-white pt-1 pb-3">
              <span className="text-xs text-white mb-3 pb-2">Dont have an account?</span>{' '}
              <Link className="text-blue-700 italic underline " to="/">
                Sign up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
