import{ BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from './components/Navbar/Navbar';
import Home from "./pages/Home/Home";
import { ProductDescription } from "./pages/ProductDescription/ProductDescription";
import Favourite from "./pages/Favourite/Favourite";


function App() {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDescription />} />
          <Route path="/fav" element={<Favourite />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App
