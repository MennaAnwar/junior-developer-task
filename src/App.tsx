import "./App.scss";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ProductList from "./Pages/ProductList/ProductList";

function App() {
  return (
    <div className="main-container">
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
