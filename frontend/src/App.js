import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Registration from "./pages/Registration";
import ProtectedRoutes from "./components/ProtectedRoutes"
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserCart from "./pages/user/UserCart";
import UserOrderDetails from "./pages/user/UserOrderDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/product-details" element={<ProductDetails />} />
        <Route path="/product-details/:id" element={<ProductDetails />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="*" element="404 ERROR: Page not found" />

        <Route element={<ProtectedRoutes />}>
          <Route path="/user" element={<UserProfilePage />} />
          <Route path="/user/my-orders" element={<UserOrderPage />} />
          <Route path="/user/cart-details" element={<UserCart />} />
          <Route path="/user/order-details" element={<UserOrderDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
