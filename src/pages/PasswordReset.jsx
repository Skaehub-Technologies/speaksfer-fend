/* eslint-disable prettier/prettier */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from '../api/axios';
import { urls, publicLinks } from '../constants/links';
import logo from '../images/logo.svg';

function PasswordReset() {
  const navigate = useNavigate();
  return (
    <div className="w-full flex justify-center p-10 bg-gray-300 h-screen">
      <Formik
        initialValues={{
          email: ''
        }}
        onSubmit={async (values) => {
          try {
            await axios.post(urls.RESET, values);
            toast.success('Check email for reset link');
            setTimeout(() => {
              navigate(publicLinks.Login, { replace: true });
            }, 3000);
          } catch (error) {
            toast.error('Email does not exist');
          }
        }}
      >
        {({ errors, touched }) => (
          <Form className="bg-dark rounded p-2 shadow px-4 m-auto">
            <img src={logo} alt="speaksfer" className="m-auto h-6 sm:h-9" />
            <h1 className="text-white text-xl text-center p-3">Forgot Password</h1>
            <div className="text-white flex flex-col mb-2 pb-2">
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <Field name="email" className="rounded bg-light-grey outline-none px-2" />
              {touched.email && errors.email && (
                <div className="my-1 text-xs text-red-700 italic">{errors.email}</div>
              )}
            </div>
            <button
              type="submit"
              className="rounded shadow bg-blue-700 p-1 text-white hover:opacity-90 w-full"
            >
              Submit
            </button>
            <p className="text-white pt-1 pb-3">
              <span className="text-xs text-white mb-3 pb-2">Already have an account?</span>{' '}
              <Link className="text-blue-700 italic underline " to="/login">
                Sign up
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PasswordReset;
