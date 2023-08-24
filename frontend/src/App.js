import "./App.css";
import {
  Register,
  Home,
  Activation,
  Login,
  ProductsPage,
  BestSellingPage,
  EventsPage,
  FAQPage,
} from "./app/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Store from "./redux/store";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { loadUser } from "./redux/action/user";

function App() {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  console.log(loading,isAuthenticated);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <>
      {loading ? null : (
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/activation/:token" element={<Activation />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/best-selling" element={<BestSellingPage />} />
              <Route path="/events" element={<EventsPage />} />
              <Route path="/faq" element={<FAQPage />} />
            </Routes>
            <ToastContainer
              position="bottom-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
            />
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
