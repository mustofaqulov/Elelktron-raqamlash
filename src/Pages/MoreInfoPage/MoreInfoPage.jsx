import { Information } from "../../components/Information/Information";
import EditIcon from "../../assets/icon/edit.svg?react";
import TrashIcon from "../../assets/icon/trash.svg?react";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import { Modal } from "../../components/Modals/Modal";
import { useState } from "react";
import ArrowIcon from "../../assets/icon/back-arrow.svg?react";

export function MoreInfoPage() {
  const [isOpen, setOpen] = useState(false);
  return (
    <div>
      <Modal
        title={"ID O’chishir"}
        text={"Siz id '199 4545454'  id o'chirmoqchisiz.Ishonchingiz komilmi?"}
        open={isOpen}
        onClose={() => setOpen(false)}
        change={
          <div>
            <Button btnClass={"gray"} text={"Yo'q, Saqlash."} />
          </div>
        }
        notchange={
          <Link to={"/search"}>
            <Button btnClass={"delete"} text={"Ha, O'chirish !"} />
          </Link>
        }
      />
      <Information
        back={
          <Link to={"/search"}>
            <Button btnClass={"border"} text={"Ortga"} icons={<ArrowIcon />} />
          </Link>
        }
        main={"ID 299-45454545"}
        add={false}
        btn={
          <Link to={"/edituser"}>
            <Button
              btnClass={"secondary"}
              text={"Tahrirlash"}
              icons={<EditIcon />}
            />
          </Link>
        }
        btnError={
          <div onClick={() => setOpen(true)}>
            <Button
              btnClass={"error"}
              text={"O’chirish"}
              icons={<TrashIcon />}
            />
          </div>
        }
      />
    </div>
  );
}
