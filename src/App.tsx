import "./App.scss";
import Card from "./components/Card/Card";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="main-container">
      <Header title="xxx" btn1="xxxx" btn2="xxxx" />
      <Card SKU="xxxx" Name="Product" Price={10} Props="Weight: 10" />
      <Footer />
    </div>
  );
}

export default App;
