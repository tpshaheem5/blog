import React, { useContext, useRef } from "react";
import { MyContext } from "../App";
import { useNavigate } from "react-router-dom";
function CreateBlog() {
  const { setTitle,title } = useContext(MyContext);
  const titleRef = useRef({});
  const bodyRef = useRef({});
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const titleValue = titleRef.current.value;
    const bodyValue = bodyRef.current.value;

    const val={title:titleValue,body:bodyValue,id:Date.now()}

    setTitle([...title,val]);
    // setBody(bodyValue);
    
    navigate('/blogs');
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" ref={titleRef} />
        </div>
        <div>
          <label>Body:</label>
          <textarea ref={bodyRef}></textarea>
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}

export default CreateBlog;
