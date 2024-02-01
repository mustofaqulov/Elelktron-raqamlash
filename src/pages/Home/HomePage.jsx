import { useState } from "react";
import { Button } from "../../components/Button/button";
import { Modal } from "../../components/Modal/Modal";
import "./homePage.scss";
import OpenIcon from "../../assets/icons/open.svg?react";
import NumberLogo from "../../assets/icons/logo.svg?react";
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div className="container">
            <div className="navigaiton">
              <div className="logo">
                <NumberLogo />
                <p>Elektron raqamlash</p>
              </div>
              <div className="registration">
                <Modal open={isOpen} onClose={() => setIsOpen(false)} />
                <div onClick={() => setIsOpen(true)} className="box">
                  <Button title={"Tizimga kirish"} icon={<OpenIcon />} />
                </div>
              </div>
            </div>
          </div>
        </nav>
        <address>
          {/* <div className="container">
            <AboutUs />
          </div> */}
        </address>
      </header>
    </>
  );
}
