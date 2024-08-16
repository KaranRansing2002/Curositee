import { createContext, useState } from "react";
import "./App.css";
import Login from "./pages/Login";
import UserD from "./pages/UserD";
import UserAddress from "./components/items/UserAddress";
import UserProfileNav from "./components/items/UserProfileNav";
import Products from "./pages/Product";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/custom/Navbar";
import Home from "./pages/Home";
import ProductDesc from "./pages/ProductDesc";
import Register from "./pages/Register";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Vendor from "./pages/Vendor";

export const UserContext = createContext(null);

export const CartContext = createContext([]);

function App() {
  const [loggedUser, setLoggedUser] = useState(() =>
    sessionStorage["user"] ? JSON.parse(sessionStorage["user"]) : null
  );

  const [cart,setCart] = useState([]);

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      <CartContext.Provider value={{cart,setCart}}>
        <div className="w-full">
          <div>
            <Navbar />
          </div>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/account" exact element={<UserD />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/product" exact element={<Products />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/product/:index" exact element={<ProductDesc />} />
            <Route path="/vendor" exact element={<Vendor />} />
          </Routes>
          <ToastContainer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
