import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/button";
import OpenIcon from "../../assets/icons/open.svg?react";
import "./homePage.scss";

export default function Home() {
  return (
    <>
      <header>
        <Header
          login={
            <Button
              title={"Tizimga kirish"}
              icon={<OpenIcon />}
              modalOpen={true}
            />
          }
        />
        <address></address>
      </header>
    </>
  );
}
