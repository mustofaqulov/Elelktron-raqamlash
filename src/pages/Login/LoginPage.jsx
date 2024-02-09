import { useState } from "react";
import GerbIcon from "../../assets/icon/gerb.svg?react";
import EyeIcon from "../../assets/icon/eye.svg?react";
import { Button } from "../../components/Button/Button";
import { InputOrg } from "../../components/Inputs/InputOrg/InputOrg";
import { NavLink } from "react-router-dom";
import "./LoginPage.scss";

export function LoginPage() {
  const [show, setShow] = useState(false);
  const handleshow = () => {
    setShow(!show);
  };
  return (
    <>
      <div className="login-page">
        <div className="login-promo">
          <div className="login-page-img">
            <GerbIcon />
          </div>
          <h1>Elektron raqamlashtirish portaliga hush kelibsiz!</h1>
          <p>Hisob raqamga kirish</p>
          <div className="registration">
            <InputOrg type={"text"} name={"Login"} />
            <InputOrg type={show ? "text" : "password"} name={"Parol"} />
            <div className="show-content">
              <label className="show">{<EyeIcon onClick={handleshow} />}</label>
            </div>
            <NavLink to={"/search"}>
              <Button btnClass="primary" text={"Kirish"} />
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
