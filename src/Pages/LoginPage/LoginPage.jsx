import "./LoginPage.scss";
import GerbIcon from "../../assets/icon/gerb.svg?react";
import { Button } from "../../components/Button/Button";
import { InputOrg } from "../../components/Inputs/InputOrg/Input";

export function LoginPage() {
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
            <InputOrg type={"password"} name={"Parol"} />
            <Button btnClass="primary" text={"Kirish"} />
          </div>
        </div>
      </div>
    </>
  );
}
