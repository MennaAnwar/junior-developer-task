import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer/Footer";
import AddProduct from "./Pages/AddProduct/AddProduct";
import ProductList from "./Pages/ProductList/ProductList";

function App() {
  return (
    <>
      <div className="main-container">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/addproduct" element={<AddProduct />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
