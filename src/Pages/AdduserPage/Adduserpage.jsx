import "./adduserpage.scss";
import { Information } from "../../components/Information/Information";
import { Button } from "../../components/Button/Button";
import { Link } from "react-router-dom";
import ArrowIcon from "../../assets/icon/back-arrow.svg?react";
import MapIcon from "../../assets/icon/map.svg?react";
import MapImg from "../../assets/img/map.png";
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
      <div className="container">
        <div className="map-location">
          <div className="map-title">
            <MapIcon />
            <p>Xaritadagi joylashuvi</p>
          </div>
          <Link
            target="_blank"
            to={
              "https://www.google.com/maps/search/O'zbekiston/@38.7849318,65.4703571,935487m/data=!3m1!1e3?entry=ttu"
            }
          >
            <img src={MapImg} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}
