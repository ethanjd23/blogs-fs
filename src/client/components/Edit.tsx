import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, useHistory, Link } from "react-router-dom";

import Navbar from "./Navbar";

const EditBlog: React.FC<IEditBlogProps> = (props) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const history = useHistory();

  useEffect(() => {
    getBlog();
  }, []);

  async function getBlog() {
    try {
      let res = await fetch(
        `http://localhost:3000/api/blogs/${props.match.params.id}`
      );
      let resJSON = await res.json();
      setTitle(await resJSON.title);
      setContent(await resJSON.content);
    } catch (error) {
      console.log(error);
    }
  };

  async function editBlog() {
    let changedBlog = {title, content};
    $.ajax({
      type: "PUT",
      url: `/api/blogs/${props.match.params.id}`,
      data: JSON.stringify(changedBlog),
      contentType: "application/json"
    }).then((response) => {
      console.log(response);
      props.history.push(`/blog/${props.match.params.id}`);
    })
  }

  async function destroyBlog() {
    $.ajax({
      type: "DELETE",
      url: `/api/blogs/${props.match.params.id}`,
      success: function (res: string) {
        console.log(res);
        props.history.push("/");
      },
    });
  }

  return (
    <>
    <Navbar />
      <div className="container internal-page-container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h3>Edit Blog</h3>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Title</label>
              <input
                type="text"
                className="form-control"
                id="exampleFormControlInput1"
                defaultValue={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Content</label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows={3}
                defaultValue={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex col-lg-8 col-md-10 mx-auto">
            <Link to={`/blog/${props.match.params.id}`} className="mr-auto p-2 btn btn-secondary">Go back</Link>
            <button className="p-2 btn btn-info" onClick={editBlog}>Edit</button>
            <button className="p-2 ml-3 btn btn-danger" onClick={destroyBlog}>
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
