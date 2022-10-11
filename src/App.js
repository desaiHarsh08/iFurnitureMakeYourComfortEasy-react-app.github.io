import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Login from "./components/Login";
// import MyFooter from "./components/MyFooter";
// import Navbar from "./components/Navbar";
import SearchPage from "./components/SearchPage";



function App() {
  
  return (
  <>
  <BrowserRouter>
    
    <Routes>
      <Route path="/" element={<Home />}  />
      <Route path="/about" element={<About />}  />
      <Route path="/login" element={<Login />}  />
      <Route path="/search-page" element={<SearchPage />}  />
    </Routes>
    
  </BrowserRouter>
  </>
  );
}

export default App;
