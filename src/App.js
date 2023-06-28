import { createContext, useState } from 'react';
import BlogDetails from './pages/BlogDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateBlog from './pages/CreateBlog';
import BlogList from './pages/BlogList';
export const MyContext = createContext();



function App() {
  const [title, setTitle] = useState([]);
  const [body, setBody] = useState([]);

  return (
    <Router>
      <MyContext.Provider value={{ title, setTitle, body, setBody }}>
        <div>
          <Routes>
            <Route path="/createblog" element={<CreateBlog />} />
            <Route path="/blogs" element={<BlogList />} />
            <Route path="/blogs/:id" element={<BlogDetails />} />
          </Routes>
        </div>
      </MyContext.Provider>
    </Router>
  );
}

export default App;
