import React, { useState } from "react";
import {
  EyeOutlined,
  EyeInvisibleOutlined,
  RobotOutlined,
} from "@ant-design/icons";
import classNames from "classnames/bind";
import styles from "./signUp.module.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-toastify';
import { service  } from "../../../util/server";


const cx = classNames.bind(styles);

export default function Register() {
  const [eye, setEye] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const newForm = new FormData();

    newForm.append("file", avatar);
    newForm.append("name", userName);
    newForm.append("email", email);
    newForm.append("password", password);

    axios
      .post(`${service}user/register`, newForm, config)
      .then((res) => {
        toast.success(res.data.message);
        resetUser();
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const resetUser=()=>{
    setUserName("");
    setEmail("");
    setPassword("");
    setAvatar(null);
  }

  return (
    <div className={cx("wrapper", "img-cover")}>
      <form className={cx("form")} onSubmit={handleSubmit}>
        <h2 style={{ margin: "20px 0" }}>Register</h2>
        <div className={cx("input")}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            className={cx("input-content")}
            name="userName"
            type="text"
            style={{ height: "40px" }}
            onChange={(e)=>setUserName(e.target.value)}
          />
        </div>
        <div className={cx("input")}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            className={cx("input-content")}
            name="email"
            type="text"
            style={{ height: "40px" }}
            onChange={(e)=>setEmail(e.target.value)}
          />
        </div>
        <div className={cx("input")}>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            className={cx("input-content")}
            name="password"
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
        <div className={cx("input-uploadFile")}>
          <div>
            <label htmlFor="imgFile">upload file image</label>
            <input
              type="file"
              id="imgFile"
              name="imgFile"
              accept="image/png, image/jpeg"
              onChange={(e)=>handleFileInputChange(e)}
            />
          </div>
          {avatar ? (
            <img src={URL.createObjectURL(avatar)} alt="avatar" width={"50px"}></img>
          ) : (
            <div style={{width:"50px",height:"50px", border:"1px solid", borderRadius:"50%", position:"relative"}} >
              <RobotOutlined className={cx("imgFile")} />
            </div>
          )}
        </div>
        <button className={cx("btn")}>Submit</button>
        <div style={{ height: "40px", padding: "20px 0px" }}>
          <p>
          Already have an account??
            <Link
              to={"/login"}
              style={{ color: "#03744b", fontWeight: "600" }}
            >
              login
            </Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
}
