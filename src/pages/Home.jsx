/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from '../api/axios';
import { urls } from '../constants/links';
import Navbar from '../layout/NavBar';

function Home() {
  const [results, setResults] = useState([]);
  const fetchArticles = () => {
    axios
      .get(urls.ARTICLES)
      .then((res) => {
        setResults(res.data.results);
      })
      .catch(() => {});
  };
  useEffect(() => {
    fetchArticles();
  }, []);
  return (
    <div className="bg-gray-100 w-full h-screen">
      <Navbar />
      <div className="container p-3 bg-gray-100">
        <h3 className="">LATEST POSTS</h3>
        <div className="flex flex-col">
          {results.map((result) => (
            <div
              className="m-2 p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md lg:max-w-full"
              key={result.post_id}
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                {result.title}
              </h5>
              <p className="mb-3 font-normal text-gray-700">{result.description}</p>
              <Link
                to="/"
                className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Home;
