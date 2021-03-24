import React from "react";
import { useState, useEffect } from "react";
import { RouteComponentProps, useHistory, Link } from "react-router-dom";

import Navbar from "./Navbar";

const Compose: React.FC<IComposeProps> = (props) => {
  const history = useHistory();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tag, setTag] = useState("");
  const [allTags, setAllTags] = useState([]);

  useEffect(() => {
    getAllTags();
  }, []);

  function handleSelect(e) {
      setTag(e)
  }

  async function getAllTags() {
    try {
      let res = await fetch("http://localhost:3000/api/tags");
      setAllTags(await res.json());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="container internal-page-container">
        <div className="row">
          <div className="col-lg-8 col-md-10 mx-auto">
            <h3>Compose Blog</h3>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="name-input">Name</label>
                <input
                  type="name"
                  className="form-control"
                  id="name-input"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="email-input">E-mail</label>
                <input
                  type="email"
                  className="form-control"
                  id="email-input"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="tag-select">Category</label>
              <select className="form-control" id="tag-select" onChange={e => handleSelect} value={tag}>
                <option label=" "></option>
                {allTags.map((tag) => (
                  <option>{tag.name}</option>
                ))}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="title-input">Title</label>
              <input
                type="text"
                className="form-control"
                id="title-input"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
              />
            </div>
            <div className="form-group">
              <label htmlFor="content-input">Content</label>
              <textarea
                className="form-control"
                id="content-input"
                rows="3"
                onChange={(e) => setContent(e.target.value)}
                value={content}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="d-flex col-lg-8 col-md-10 mx-auto">
            <Link
              to={`/blog/${props.match.params.id}`}
              className="mr-auto p-2 btn btn-secondary"
            >
              Go back
            </Link>
            <button className="p-2 ml-3 btn btn-success">Post</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Compose;

interface IComposeProps extends RouteComponentProps<{ id: string }> {}
