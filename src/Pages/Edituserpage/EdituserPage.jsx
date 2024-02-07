import { Information } from "../../components/Information/Information";
import { Button } from "../../components/Button/Button";

export function EdituserPage() {
  return (
    <div>
      <Information
        add={false}
        btn={<Button btnClass={"secondary"} text={"Saqlash"} />}
      />
    </div>
  );
}
