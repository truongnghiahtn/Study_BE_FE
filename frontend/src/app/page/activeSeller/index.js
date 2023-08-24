import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import axios from "axios";
import classNames from "classnames/bind";
import styles from "./activation.module.scss";
import { service  } from "../../../util/server";


const cx = classNames.bind(styles);

export default function ActivationSeller() {
  const routeParams = useParams();
  const [flag,setFlag] = useState(false);
  const [active,setActive]= useState(false);
  useEffect(() => {
    if(flag){
      axios
      .post(`${service}shop/active`,routeParams)
      .then((res)=>{
        setActive(true)
      })
      .catch((err)=>{
        console.log(err);
      })
    }
    setFlag(true);
  }, [flag]);

  return <div className={cx("warapper")} >
    {active?(
      <p>
        Bạn đã tạo tài khoản thành công
      </p>
    ):(<p>
        Tài khoản của bạn chưa được tạo
    </p>)}
  </div>;
}
