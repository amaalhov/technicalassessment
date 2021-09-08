import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/navbar";
import articlesList from "./components/articles-list";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
      {/* <Navbar />
      <articlesList /> */}
    </div>
  );
}

export default App;
