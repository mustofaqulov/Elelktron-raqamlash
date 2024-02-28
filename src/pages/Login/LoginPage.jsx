import { useState } from "react";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import GerbIcon from "../../assets/icon/gerb.svg?react";
import EyeIcon from "../../assets/icon/eye.svg?react";
import HideIcon from "../../assets/icon/not-eye.svg?react";
import { Button } from "../../components/Button/Button";
import "./LoginPage.scss";
import { data } from "../../utils/mocks/data";
export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMassege] = useState("");
  const [visible, setVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(email, password).then((data) => {
      if (data) {
        navigate("/search");
      } else {
        setErrorMassege("Login yoki parol xato kiritildi");
      }
    });
  };
  return (
    <>
      <div className="login-page">
        <div className="login-promo">
          <div className="login-page-img">
            <GerbIcon />
          </div>
          <h1>Elektron raqamlashtirish portaliga xush kelibsiz!</h1>
          <p>Hisob raqamga kirish</p>
          <div className="registration">
            <form action="" onSubmit={handleSubmit}>
              <label htmlFor="">Login</label>
              <input
                className="login"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label htmlFor="">Parol</label>
              <div
                className="show-inp"
                style={!data ? { border: "1px solid red" } : null}
              >
                <input
                  className="parol"
                  type={visible ? "password" : "text"}
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  id="password"
                />
                <div
                  className="show-click"
                  onClick={() => setVisible(!visible)}
                >
                  {visible ? <HideIcon /> : <EyeIcon />}
                </div>
              </div>
              {errorMessage && <smal>{errorMessage}</smal>}
              <Button type="submit" btnClass="primary" text={"Kirish"} />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
