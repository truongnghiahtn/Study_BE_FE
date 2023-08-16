import "./App.css";
import { Register, Home, Activation,Login } from "./app/page";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Store from "./redux/store";
import {useEffect} from "react";
import { useSelector } from "react-redux";
import { loadUser } from "./redux/action/user";

function App() {
  const { loading } = useSelector((state) => state.user);
  console.log(loading);
  useEffect(() => {
    Store.dispatch(loadUser());
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/activation/:token" element={<Activation />} />
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
  );
}

export default App;
