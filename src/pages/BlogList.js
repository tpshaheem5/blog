import React, { useContext } from 'react';
import { MyContext } from '../App';

function BlogList() {
  const { title, body } = useContext(MyContext);  
console.warn(title);
  return (
    <div>
      <h2>Blog List</h2>
      <ul>
        {Array.isArray(title)&&
        title.map((blog, index) => (
          <li key={index}>
            <h3>{blog}</h3>
            {/* <p>{body[index]}</p> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
