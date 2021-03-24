import React from "react";
import { useState, useEffect } from "react";

import Preview from "./Preview";
import Header from "./Header";
import Navbar from "./Navbar";

const Home: React.FunctionComponent<IHomeProps> = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  async function getBlogs() {
    try {
      let res = await fetch("http://localhost:3000/api/blogs");
      setBlogs(await res.json());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Navbar />
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {blogs
              .slice(0)
              .reverse()
              .map((blog) => {
                return (
                  <Preview
                    id={blog.id}
                    name={blog.name}
                    title={blog.title}
                    content={blog.content}
                    tagid={blog.tagid}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

interface IHomeProps {}
