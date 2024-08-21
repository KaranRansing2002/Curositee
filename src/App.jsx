import { createContext, useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import Navbar from "./components/custom/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Products from "./pages/Product";
import ProductDesc from "./pages/ProductDesc";
import Register from "./pages/Register";
import UserD from "./pages/UserD";
import Vendor from "./pages/Vendor";
import WishList from "./pages/WishList";
import axios from "axios";

export const UserContext = createContext(null);

export const CartContext = createContext([]);

function App() {
  const [loggedUser, setLoggedUser] = useState(() =>
    sessionStorage["user"] ? JSON.parse(sessionStorage["user"]) : null
  );

  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const navigate = useNavigate();

    useEffect(() => {
        // If there is no logged user, navigate to the home page and stop further execution
        if (!loggedUser || !loggedUser.uid) {
            navigate('/');
            toast.error('Please log in!', {
                position: "top-right"
            });
            return; // Return early to prevent the API call
        }

        // If a logged user is present, fetch the wishlist
        axios.get(`http://localhost:8080/getWishList?uid=${loggedUser.uid}`)
            .then(response => setWishlist(response.data))
            .catch(error => console.error('Error fetching wishlist:', error));
    }, []);

  const handleAddToWishlist = async (product) => {
    const isAlreadyInWishlist = wishlist.some(item => item.imgid === product.imgid);

    if (isAlreadyInWishlist) {
      toast.warn('Product is already in the wishlist!', {
        position: "top-right"
      });
    } else {
      const uid = 4;
      const apiUrl = `http://localhost:8080/addToWishList?imgid=${product.imgid}&uid=${uid}`;

      try {
        await axios.post(apiUrl);
        setWishlist([...wishlist, product]);
        toast.success('Product added to wishlist!', {
          position: "top-right"
        });
      } catch (error) {
        console.error('Error adding to wishlist:', error);
        toast.error('Failed to add product to wishlist.', {
          position: "top-right"
        });
      }
    }
  };

  return (
    <UserContext.Provider value={{ loggedUser, setLoggedUser }}>
      <CartContext.Provider value={{ cart, setCart }}>
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
            <Route
              path="/product/:index"
              exact
              element={<ProductDesc handleAddToWishlist={handleAddToWishlist} />}
            />
            <Route
              path="/Wishlist/:index"
              exact
              element={<ProductDesc handleAddToWishlist={handleAddToWishlist} />}
            />
            <Route path="/vendor" exact element={<Vendor />} />
            <Route
              path="/Wishlist"
              exact
              element={<WishList wishlist={wishlist} setWishlist={setWishlist} />}
            />
          </Routes>
          <ToastContainer />
        </div>
      </CartContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
