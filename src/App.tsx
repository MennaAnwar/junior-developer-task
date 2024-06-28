import "./App.scss";
import Footer from "./components/Footer/Footer";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <div className="main-container">
      <AddProduct />
      <Footer />
    </div>
  );
}

export default App;
