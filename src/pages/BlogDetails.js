import React,{useContext} from 'react'
import { MyContext } from '../App'
import { useParams } from 'react-router-dom'


function BlogDetails() {
  const {title}=useContext(MyContext)
  const {id}=useParams();

  const selectedItem = title.find((item) => item.id === parseInt(id));
  console.log(selectedItem)

  return (
    <div>
       <h2>{selectedItem.title}</h2>
      <p>{selectedItem.body}</p>
    </div>
  )
}

export default BlogDetails