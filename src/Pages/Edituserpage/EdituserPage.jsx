import { Information } from "../../components/Information/Information";
import { Button } from "../../components/Button/Button";
import { Modal } from "../../components/Modals/Modal";
import { useState } from "react";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icon/back-arrow.svg?react";

export function EdituserPage() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <Modal
        title={"O'zgartirish kiritish"}
        text={
          "Siz id '199 4545454' ga o'zgartirish kiritmoqchsiz ishonchingiz komilmi"
        }
        open={isOpen}
        onClose={() => setOpen(false)}
        change={<Button btnClass={"gray"} text={"Yoq, Ortga."} />}
        notchange={
          <Link to={"/moreinfo"}>
            <Button btnClass={"secondary"} text={"Ha, Saqlash !"} />
          </Link>
        }
      />
      <Information
        back={
          <Link to={"/moreinfo"}>
            <Button btnClass={"border"} text={"Ortga"} icons={<ArrowIcon />} />
          </Link>
        }
        main={"Tahrirlash"}
        add={false}
        btn={
          <div onClick={() => setOpen(true)}>
            {/* <Link to={"/moreinfo"}> */}
            <Button btnClass={"secondary"} text={"Saqlash"} />
            {/* </Link> */}
          </div>
        }
      />
    </div>
  );
}
