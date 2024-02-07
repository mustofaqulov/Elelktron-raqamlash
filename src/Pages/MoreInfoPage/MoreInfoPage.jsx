import { Information } from "../../components/Information/Information";
import EditIcon from "../../assets/icon/edit.svg?react";
import TrashIcon from "../../assets/icon/trash.svg?react";
import { Button } from "../../components/Button/Button";

export function MoreInfoPage() {
  return (
    <div>
      <Information
        add={true}
        btn={
          <Button
            btnClass={"secondary"}
            text={"Tahrirlash"}
            icons={<EditIcon />}
          />
        }
        btnError={
          <Button btnClass={"error"} text={"O’chirish"} icons={<TrashIcon />} />
        }
      />
    </div>
  );
}

export default MoreInfoPage;
