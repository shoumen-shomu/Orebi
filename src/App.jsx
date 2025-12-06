import "./App.css";
import RootLayout from "./assets/components/layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/pages/Home";
import Shop from "./assets/components/pages/Shop";
import Error from "./assets/components/pages/Error";
import About from "./assets/components/pages/About";
import Contact from "./assets/components/pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
