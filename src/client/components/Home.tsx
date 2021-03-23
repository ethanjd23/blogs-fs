import React from "react";
import { useState, useEffect } from "react";

import BlogPreview from "./BlogPreview";
import Header from "./Header";

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
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            {blogs
              .slice(0)
              .reverse()
              .map((blog) => {
                return (
                  <BlogPreview
                  id = {blog.id}
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
