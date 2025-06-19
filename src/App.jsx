import Home from "./pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NotFound from "./pages/NotFound.jsx";
import { ThemeProvider } from "./context/ThemeContext";
import "./App.css";

function App() {
  return (
    <>
      <ThemeProvider>
        <Toaster position="bottom-right" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
