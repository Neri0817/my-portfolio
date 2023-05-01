// import logo from './logo.svg';
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./components/Home/Home";
import { Route, Routes } from "react-router";
import { About } from "./components/About/About";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
