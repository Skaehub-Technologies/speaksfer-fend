/* eslint-disable prettier/prettier */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../api/axios';
import { urls, publicLinks } from '../constants/links';

function Login() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center p-10 bg-light-dark h-screen">
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={async (values) => {
          try {
            await axios.post(urls.LOGIN, values);
            toast.success('successfully logged in');
            navigate(publicLinks.home, { replace: true });
          } catch (error) {
            toast.error('login failed');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-dark rounded p-2 shadow px-4">
            <h1 className="text-white text-xl">Login</h1>
            <div className="text-white flex flex-col mb-2">
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
            <p className="text-white">
              <span className="text-xs">Already have an account?</span>{' '}
              <Link className="text-blue-700 italic underline" to="/">
                Sign in
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
