import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from "react";
import Home from "./pages/Home";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home/>} />
           
          </Routes>
        </BrowserRouter>
        );
  
};

export default App;

