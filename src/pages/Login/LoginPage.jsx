import { useState } from "react";
import AuthService from "../../services/AuthService";
import { useNavigate } from "react-router-dom";
import GerbIcon from "../../assets/icon/gerb.svg?react";
import EyeIcon from "../../assets/icon/eye.svg?react";
import HideIcon from "../../assets/icon/not-eye.svg?react";
import { Button } from "../../components/Button/Button";
import "./LoginPage.scss";
export function LoginPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMassege] = useState(null);
  const [visible, setVisible] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    AuthService.login(email, password).then((data) => {
      if (data) {
        navigate("/search");
      } else {
        setErrorMassege(true);
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
          <div className="sign-up">
            <form action="" onSubmit={handleSubmit}>
              <label style={errorMessage && { color: "red" }}>Login</label>
              <input
                className="login"
                type="text"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                style={errorMessage && { borderColor: "red" }}
              />
              <label style={errorMessage && { color: "red" }}>Parol</label>
              <div
                className="show-inp"
                style={errorMessage && { border: "1px solid red" }}
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
