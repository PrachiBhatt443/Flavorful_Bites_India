import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Blogs from "./components/Blogs/Blogs";
import Homepage from "./components/Navbar/HomePage";
import Recepie from "./components/Recepie/Recepie";
function App() {
  return ( 
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/blogs" element={<Blogs/>} />
          {/* <Route path="/recepie" element={<Recepie index={1}/>} /> */}
          {/* <Route path="/recepie/:index" component={Recepie} /> */}
          <Route path="recepie">
            <Route path=":id" element={<Recepie/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
export default App;
