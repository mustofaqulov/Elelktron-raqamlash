import { Header } from "../Header/Header";
import { Button } from "../Button/Button";
import PropTypes from "prop-types";
import { InputOrg } from "../Inputs/InputOrg/Input";
import ArrowIcon from "../../assets/icon/back-arrow.svg?react";
import "./information.scss";

export function Information({ add, btn, btnError }) {
  const Infodata = [
    {
      name: "F.I.Sh",
      placeholder: "Xasan Asqarov Sobir O'gli",
      Only: add,
      id: 1,
    },
    {
      name: "Viloyat",
      placeholder: "Qashqadaryo",
      Only: add,
      id: 2,
    },
    {
      name: "Tuman",
      placeholder: "Qarshi",
      Only: add,
      id: 3,
    },
    {
      name: "Mahalla",
      placeholder: "Qarshi",
      Only: add,
      id: 4,
    },
    {
      name: "Xonodon kodi",
      placeholder: "AA 85040703",
      Only: add,
      id: 5,
    },
  ];
  const data = [
    {
      name: "Telefon raqami",
      placeholder: "+998 99 999 99 99",
      Only: add,
      id: 1,
    },
    {
      name: "Chet davlatda",
      placeholder: 0,
      Only: add,
      id: 2,
    },
    {
      name: "Uy manzili",
      placeholder: "https/...",
      Only: add,
      id: 3,
    },
    {
      name: "Uy raqami",
      placeholder: "12",
      Only: add,
      id: 4,
    },
    {
      name: "Xonodon kodi",
      placeholder: "249 45454545",
      Only: add,
      id: 5,
    },
  ];
  return (
    <>
      <div className="container">
        <Header />
        <div className="inforamtion">
          <div className="special">
            <h2>
              ID <span>299-45454545</span>
            </h2>
            <Button btnClass={"border"} text={"Ortga"} icons={<ArrowIcon />} />
          </div>
          <div className="wrapper">
            <div className="info-content">
              {Infodata.map(({ placeholder, Only, id, name }) => {
                return (
                  <>
                    <InputOrg
                      key={id}
                      placeholder={placeholder}
                      readOnly={Only}
                      name={name}
                    />
                  </>
                );
              })}
            </div>
            <div className="info-content">
              {data.map(({ placeholder, Only, id, name }) => {
                return (
                  <>
                    <InputOrg
                      key={id}
                      placeholder={placeholder}
                      readOnly={Only}
                      name={name}
                    />
                  </>
                );
              })}
            </div>
          </div>
          <div className="sort">
            {btn}
            {btnError}
          </div>
        </div>
      </div>
    </>
  );
}
Information.defaultProps = {
  add: null,
  btn: null,
  btnError: null,
};

Information.propTypes = {
  add: PropTypes.bool,
  btn: PropTypes.object,
  btnError: PropTypes.bool,
};
