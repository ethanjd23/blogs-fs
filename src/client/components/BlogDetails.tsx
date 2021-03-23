import React from 'react'
import { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';

import { IBlog } from '../App';

const BlogDetails: React.FC = (props) => {
    const [blog, setBlog] = useState({});
    const [blogTag, setBlogTag] = useState("");

    useEffect(() => {
        getBlog()
    }, []);

    async function getBlog () {
        try {
            let res = await fetch(`http://localhost:3000/api/blogs/${props.match.params.id}`);
            let resTag = await fetch(`http://localhost:3000/api/tags/${props.match.params.id}`);
            let resTagName = (await resTag.json())[0].name
            setBlog(await res.json());
            setBlogTag(resTagName);
          } catch (error) {
            console.log(error);
          }
    } 

    return (
        <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <h2>{blog.title}</h2>
                <p className="btn btn-success">{blogTag}</p>
                <p className="text-muted">{blog.name}</p>
                <p>{blog.content}</p>
            </div>
          </div>
        </div>
      </article>
    )
}

export default BlogDetails;

interface IDetailsProps extends RouteComponentProps<{id: string}> {}