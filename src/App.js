import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from 'react-router-dom';
import Blogs from "./components/Blogs/Blogs";
import Homepage from "./components/Navbar/HomePage";
import Recepie from "./components/Recepie/Recepie";
import Article from "./components/Blogs/Article";
function App() {
  return ( 
    // <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/blogs" element={<Blogs/>} />
          <Route path="recepie">
            <Route path=":id" element={<Recepie/>}/>
          </Route>
          <Route path="/article" element={<Article/>}/>
        </Routes>
      </div>
    // </Router>
  );
}
export default App;
