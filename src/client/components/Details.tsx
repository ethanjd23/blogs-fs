import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, Link } from "react-router-dom";

import Navbar from './Navbar';

const BlogDetails: React.FC<IDetailsProps> = (props) => {
  const [blog, setBlog] = useState({});
  const [blogTag, setBlogTag] = useState("");

  useEffect(() => {
    getBlog();
  }, []);

  async function getBlog() {
    try {
      let res = await fetch(
        `http://localhost:3000/api/blogs/${props.match.params.id}`
      );
      setBlog(await res.json());

      let resTag = await fetch(
        `http://localhost:3000/api/tags/${props.match.params.id}`
      );
      if (resTag) {
        let resTagName = (await resTag.json())[0].name;
        setBlogTag(resTagName);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
    <Navbar />
      <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
              <h2>{blog.title}</h2>
              <p className="badge badge-success">{blogTag}</p>
              <p className="text-muted">{blog.name}</p>
              <p>{blog.content}</p>
            </div>
          </div>
          <div className="row">
            <div className="d-flex justify-content-between col-lg-8 col-md-10 mx-auto">
            <Link to={`/`} className="btn btn-secondary">
              Go back
            </Link>
            <Link
              to={`/edit/${props.match.params.id}`}
              className="btn btn-secondary"
            >
              Edit
            </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default BlogDetails;

interface IDetailsProps extends RouteComponentProps<{ id: string }> {}
