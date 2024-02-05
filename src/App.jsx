import { Button } from "./components/Button/Button";
import AddIcon from "./assets/icon/user-add.svg?react";
import "./styles/_base.scss";

function App() {
  return (
    <>
      <Button className="box" text={"Fuqoro qo’shish"} icons={<AddIcon />} />
    </>
  );
}

export default App;
