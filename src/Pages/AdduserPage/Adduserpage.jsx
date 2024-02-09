import { Information } from "../../components/Information/Information";
import { Button } from "../../components/Button/Button";
import ArrowIcon from "../../assets/icon/back-arrow.svg?react";
import { Link } from "react-router-dom";

export function AdduserPage() {
  return (
    <div>
      <Information
        back={
          <Link to={"/"}>
            <Button btnClass={"border"} text={"Ortga"} icons={<ArrowIcon />} />
          </Link>
        }
        main={"Fuqoro qo’shish"}
        add={false}
        btn={
          <Link to={"/search"}>
            <Button btnClass={"secondary"} text={"Saqlash"} />
          </Link>
        }
      />
    </div>
  );
}
