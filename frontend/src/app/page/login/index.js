import React, { useState } from "react";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
} from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./login.module.scss";
import { Link,useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import { service  } from "../../../util/server";


const cx = classNames.bind(styles);

export default function Login() {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    const user={
        userName,
        password
    }
    axios
      .post(`${service}user/login`, user,{ withCredentials: true })
      .then((res) => {
        toast.success("Đăng nhập nhành công");
        navigate("/");
        //window.location.reload();
      })
      .catch((error) => {
        toast.error("Lỗi khi đăng nhập");
      });
  };
  return (
    <div className={cx("wrapper", "img-cover")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <h2 style={{ margin: "20px 0" }}>Login</h2>
        <div className={cx("input")}>
          <label htmlFor="userName">Username or email </label>
          <input
            id="userName"
            className={cx("input-content")}
            name="userName"
            value={userName}
            type="text"
            style={{ height: "40px" }}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className={cx("input")}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className={cx("input-content")}
            name="password"
            value={password}
            type={eye ? "text" : "password"}
            onChange={(e)=>setPassword(e.target.value)}
          />
          {eye ? (
            <span
              onClick={() => {
                setEye(false);
              }}
              className={cx("icon")}
            >
              <EyeOutlined />
            </span>
          ) : (
            <span
              onClick={() => {
                setEye(true);
              }}
              className={cx("icon")}
            >
              <EyeInvisibleOutlined />
            </span>
          )}
        </div>
        <button className={cx("btn")}>Submit</button>
        <div style={{ height: "40px", padding: "20px 0px" }}>
          <p>
          create new account ?
            <Link
              to={"/register"}
              style={{ color: "#03744b", fontWeight: "600" }}
            >
               register
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
