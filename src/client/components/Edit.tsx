import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import Header from "./Header";

const EditBlog: React.FC<IEditBlogProps> = (props) => {
  const [blog, setBlog] = useState({});
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    getBlog();
  }, []);

  async function getBlog() {
    try {
      let res = await fetch(
        `http://localhost:3000/api/blogs/${props.match.params.id}`
      );
      setBlog(await res.json());
      // console.log(blog);
      // setTitle(blog.title);
      // setContent(blog.content);
    } catch (error) {
      console.log(error);
    }
  }

  async function destroyBlog() {
    $.ajax({
      type: "DELETE",
      url: `/api/blogs/${props.match.params.id}`,
      success: function (res: string) {
        console.log(res);
        history.back();
      },
    });
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h3>Edit Blog</h3>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={blog.title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Content</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                defaultValue={blog.content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <button className="btn btn-danger" onClick={destroyBlog}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditBlog;

interface IEditBlogProps extends RouteComponentProps<{ id: string }> {}
