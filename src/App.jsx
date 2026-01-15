import "./App.css";
import AboutUs from "./components/AboutUs";
import ProductList from "./components/ProductList";

function App() {
  return (
    <div className="landing">
      <h1>Paradise Nursery</h1>
      <p>Your one-stop shop for beautiful plants</p>
      <button>Get Started</button>

      <AboutUs />
      <ProductList />
    </div>
  );
}

export default App;
