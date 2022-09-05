import React, { useEffect, useState } from 'react';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { privateLinks } from '../constants/links';
import useAuth from '../hooks/useAuth';
// import axios from '../api/axios';
// import useRefreshToken from '../hooks/useRefreshToken';
import useAxiosPrivate from '../hooks/useAxiosPrivate';

function Profile() {
  const axiosPrivate = useAxiosPrivate();
  // const navigate = useNavigate();
  //   const refresh = useRefreshToken();
  // const location = useLocation();
  const [profile, setProfile] = useState({
    username: 'John Doe',
    bio: 'Maybe update your bio!',
    image:
      'https://images.unsplash.com/photo-1544502062-f82887f03d1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1259&q=80'
  });

  const controller = new AbortController();
  // eslint-disable-next-line camelcase
  const { auth } = useAuth();
  const fetchProfile = async () => {
    try {
      const response = await axiosPrivate.get(`user/profile/${auth?.user_id}/`);
      setProfile(response.data);
    } catch (error) {
      toast.error('profile fetch failed');
      // navigate('/', { state: { from: location }, replace: true });
    }
  };
  useEffect(() => {
    fetchProfile();
    return () => {
      controller.abort();
    };
  }, []);

  return (
    <div className="w-full flex items-center justify-center h-screen bg-gray-100">
      <section className="rounded p-2 flex flex-col items-center shadow bg-gray-200 w-full max-w-sm">
        <img
          className="rounded-full h-32 w-32 overflow-hidden object-cover transition-all duration-150 ease-in-out cursor-pointer hover:scale-105"
          src={profile.image}
          alt="profile"
        />
        <h3 className=" text-xl my-2 text-indigo-700 font-bold ">@{profile.username}</h3>
        <div className="flex py-2 px-4 justify-between align-center w-full">
          <div className="flex flex-col align-center w-full text-center">
            <h3 className="font-bold">007</h3>
            <p className="text-sm italic text-gray-500 font-semibold">Followers</p>
          </div>
          <div className="flex flex-col align-center w-full text-center">
            <h3 className="font-bold">010</h3>
            <p className="text-sm italic text-gray-500 font-semibold">Following</p>
          </div>
        </div>
        <p className=" italic text-center max-w-xs mt-2">{profile.bio}</p>
        <div className="w-full flex p-3 px-12 items-center justify-between mt-4">
          <Link to={privateLinks.EDITPROFILE}>
            <AiFillEdit
              size={25}
              className=" transition-all duration-150 ease-in-out cursor-pointer  hover:scale-105"
            />
          </Link>
          <AiFillDelete
            size={25}
            className=" transition-all duration-150 ease-in-out cursor-pointer text-red-700 hover:scale-105"
          />
        </div>
      </section>
    </div>
  );
}

export default Profile;
