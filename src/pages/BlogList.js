import React, { useContext } from 'react';
import { MyContext } from '../App';
import { useNavigate } from 'react-router-dom';

function BlogList() {
  const nav=useNavigate()
  const { title } = useContext(MyContext);  
console.warn(title);
  return (
    <div>
        <h1>BLOG</h1>

      {title.map((item)=>{
        return(
          <div key={item.id}>
        <h3 onClick={()=>nav(`/blogs/${item.id}`)}>{item.title}</h3>
        </div>
        )
        
      })}
    </div>
  )
}
export default BlogList;
