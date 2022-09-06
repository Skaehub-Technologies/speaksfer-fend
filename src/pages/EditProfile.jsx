/* eslint-disable prettier/prettier */
/* eslint-disable camelcase */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ProfileSchema } from '../validation/validations';
import { publicLinks } from '../constants/links';
import useAuth from '../hooks/useAuth';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function EditProfile() {
  const navigate = useNavigate();
  const { auth } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  return (
    <div className="w-full flex justify-center p-10 bg-gray-100 h-screen">
      <Formik
        initialValues={{
          image: '',
          bio: '',
          username: ''
        }}
        validationSchema={ProfileSchema}
        onSubmit={async (values) => {
          const formData = new FormData();
          if (values.image) {
            formData.append('image', values.image);
          }
          formData.append('bio', values.bio);
          formData.append('username', values.username);
          try {
            await axiosPrivate.patch(`user/profile/${auth?.user_id}/`, formData);
            toast.success('profile updated');
            navigate(publicLinks.PROFILE, { replace: true });
          } catch (error) {
            toast.error('Update failed');
          }
        }}
      >
        {({ errors, touched, setFieldValue }) => (
          <Form className="bg-white rounded p-2 shadow px-4 m-auto w-11/12 max-w-3xl">
            <h1 className=" text-xl text-center p-3 font-semibold">Edit Profile</h1>
            <div className=" flex flex-col mb-2 pb-2">
              <label htmlFor="image" className="text-sm">
                Profile Picture
              </label>
              <input
                type="file"
                onChange={(event) => {
                  setFieldValue('image', event.target.files[0]);
                }}
                className="rounded bg-gray-100 outline-none px-2"
              />
              {touched.image && errors.image && (
                <div className="my-1 text-xs text-red-700 italic">{errors.image}</div>
              )}
            </div>
            <div className=" flex flex-col mb-2 pb-2">
              <label htmlFor="username" className="text-sm">
                Username
              </label>
              <Field name="username" className="rounded bg-gray-100 outline-none px-2" />
              {touched.username && errors.username && (
                <div className="my-1 text-xs text-red-700 italic">{errors.username}</div>
              )}
            </div>
            <div className=" flex flex-col mb-2 pb-2">
              <label htmlFor="bio" className="text-sm">
                Bio
              </label>
              <Field type="bio" name="bio" className="rounded bg-gray-100 outline-none px-2" />
              {touched.bio && errors.bio && (
                <div className="my-1 text-xs text-red-700 italic">{errors.bio}</div>
              )}
            </div>
            <button
              type="submit"
              className="rounded shadow text-white font-semibold bg-indigo-700 p-1  hover:opacity-90 w-full"
            >
              Update Profile
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default EditProfile;
