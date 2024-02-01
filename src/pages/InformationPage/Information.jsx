import { Header } from "../../components/Header/Header";
import { Button } from "../../components/Button/Button";
import UserIcon from "../../assets/icons/user-add.svg?react";
import SearchIcon from "../../assets/icons/search.svg?react";

export function Information() {
  return (
    <Header
      user={<Button title={"Creat info"} icon={<UserIcon />} />}
      info={<Button title={"Search id"} icon={<SearchIcon />} />}
    />
  );
}

export default Information;
