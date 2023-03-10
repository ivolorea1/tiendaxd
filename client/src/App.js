//import logo from './logo.svg';
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import HomePage from "./pages/HomePage";
import PageProducts from "./pages/PageProducts";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/products" element={<PageProducts />} />
        <Route path="/products/:id" element={<ProductDetails/>}/>
        <Route path="*" element={<HomePage/>}/>
      </Routes>
      
      <Footer />
    </>
  );
}

export default App;
