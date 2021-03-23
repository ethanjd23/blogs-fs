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
            setBlog(await res.json());
            
            let resTag = await fetch(`http://localhost:3000/api/tags/${props.match.params.id}`);
            if (resTag) {
                let resTagName = (await resTag.json())[0].name
                setBlogTag(resTagName);
            }
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
            }
        })
    }

    return (
        <article>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <h2>{blog.title}</h2>
                <p className="badge badge-success">{blogTag}</p>
                <p className="text-muted">{blog.name}</p>
                <p>{blog.content}</p>
                <button className="btn-danger" onClick={destroyBlog}>Delete</button>
            </div>
          </div>
        </div>
      </article>
    )
}

export default BlogDetails;

interface IDetailsProps extends RouteComponentProps<{id: string}> {}