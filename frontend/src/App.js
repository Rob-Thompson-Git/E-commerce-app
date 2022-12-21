import {BrowserRouter, Routes, Route} from "react-router-dom"

//components
import Header from "./components/Header";
import Footer from "./components/Footer";

//user components
import UserChat from "./components/user/UserChat";
import RoutesUserChat from "./components/user/RoutesUserChat"

//public avaliable pages
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import LoginPage from "./pages/LoginPage";
import ProductDetails from "./pages/ProductDetails";
import ProductList from "./pages/ProductList";
import Registration from "./pages/Registration";

//protected users
import ProtectedRoutes from "./components/ProtectedRoutes"
import UserProfilePage from "./pages/user/UserProfilePage";
import UserOrderPage from "./pages/user/UserOrderPage";
import UserCart from "./pages/user/UserCart";
import UserOrderDetails from "./pages/user/UserOrderDetails";

//protected admin
import AdminAnalytics from "./pages/admin/AdminAnalytics";
import AdminChatsPage from "./pages/admin/AdminChatsPage";
import AdminEditProductsPage from "./pages/admin/AdminEditProductsPage";
import AdminCreateProduct from "./pages/admin/AdminCreateProduct";
import AdminEditUser from "./pages/admin/AdminEditUser";
import AdminOrderDetails from "./pages/admin/AdminOrderDetails";
import AdminOrdersPage from "./pages/admin/AdminOrdersPage";
import AdminProductsPage from "./pages/admin/AdminProductsPage";
import AdminUsersPage from "./pages/admin/AdminUsersPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route element={<RoutesUserChat />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/product-details/:id" element={<ProductDetails />} />
            <Route path="/product-list" element={<ProductList />} />
            <Route path="*" element="404 ERROR: Page not found" />

            <Route element={<ProtectedRoutes admin={false} />}>
              <Route path="/user" element={<UserProfilePage />} />
              <Route path="/user/my-orders" element={<UserOrderPage />} />
              <Route path="/user/cart-details" element={<UserCart />} />
              <Route path="/user/order-details" element={<UserOrderDetails />} />
            </Route>
          </Route>

          <Route element={<ProtectedRoutes admin={true} />}>
            <Route path="/admin/users" element={<AdminUsersPage />} />
            <Route path="/admin/edit-user" element={<AdminEditUser />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/create-new-product" element={<AdminCreateProduct />} />
            <Route path="/admin/edit-product" element={<AdminEditProductsPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/order-details" element={<AdminOrderDetails />} />
            <Route path="/admin/chats" element={<AdminChatsPage />} />
            <Route path="/admin/analytics" element={<AdminAnalytics />} />
          </Route>

        </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
