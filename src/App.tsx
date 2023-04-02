import React from "react";
import { Route, Routes } from "react-router-dom";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

import { Container } from "react-bootstrap";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Store from "./pages/Store";
import About from "./pages/About";

const App: React.FC = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
   </ShoppingCartProvider>
  )
}

export default App
