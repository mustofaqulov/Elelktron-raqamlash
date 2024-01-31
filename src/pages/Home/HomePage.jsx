import { useState } from "react";
import { Button } from "../../components/Button/button";
import { AboutUs } from "../../components/Cards/AboutUs/AboutUs";
import { Modal } from "../../components/Modal/Modal";
import "./homePage.scss";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="navigaiton">
              <div className="logo">
                <p>Elektron raqamlash</p>
              </div>
              <div className="registration">
                <label htmlFor="search">
                  <div className="input-box">
                    <input placeholder="AAB70..." autoComplete="off" id="search" type="text" />
                    <span class="material-symbols-outlined">search</span>
                  </div>
                </label>
                <Modal open={isOpen} onClose={() => setIsOpen(false)} />
                <div onClick={() => setIsOpen(true)} className="box">
                  <Button title={"Login"} />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <address>
          <div className="container">
            <AboutUs />
          </div>
        </address>
      </header>
    </>
  );
}
