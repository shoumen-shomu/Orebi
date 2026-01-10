import "./App.css";
import RootLayouts from "./components/layouts/RootLayouts";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Shop from "./components/pages/Shop";
import Error from "./components/pages/Error";
import About from "./components/pages/About";
import Contacts from "./components/pages/Contacts";
import Journal from "./components/pages/Journal";
import Category1 from "./components/pages/Category1";
import Category2 from "./components/pages/Category2";
import Category3 from "./components/pages/Category3";
import Category4 from "./components/pages/Category4";
import Category5 from "./components/pages/Category5";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import SpecialEShop from "./components/pages/SpecialEShop";
import Shipping from "./components/pages/Shipping";
import SecurePayments from "./components/pages/SecurePayments";
import TermsConditions from "./components/pages/TermsConditions";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import MyAccount from "./components/pages/MyAccount";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RootLayouts />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="about" element={<About />} />
          <Route path="contacts" element={<Contacts />} />
          <Route path="journal" element={<Journal />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="myaccount" element={<MyAccount />} />
          <Route path="category1" element={<Category1 />} />
          <Route path="category2" element={<Category2/>} />
          <Route path="category3" element={<Category3 />} />
          <Route path="category4" element={<Category4 />} />
          <Route path="category5" element={<Category5 />} />
          <Route path="privacypolicy" element={<PrivacyPolicy />} />
          <Route path="termsconditions" element={<TermsConditions />} />
          <Route path="specialeshop" element={<SpecialEShop />} />
          <Route path="shipping" element={<Shipping />} />
          <Route path="securepayments" element={<SecurePayments />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
