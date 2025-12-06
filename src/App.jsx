import RootLayout from "./assets/components/layouts/RootLayout";
import { Routes, Route } from "react-router-dom";
import Home from "./assets/components/pages/Home";
import Shop from "./assets/components/pages/Shop";
import Error from "./assets/components/pages/Error";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
