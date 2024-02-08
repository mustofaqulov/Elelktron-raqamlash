import { Header } from "../Header/Header";
import PropTypes from "prop-types";
import { InputOrg } from "../Inputs/InputOrg/Input";
import "./information.scss";

export function Information({ add, btn, btnError, main, back }) {
  const Infodata = [
    {
      name: "F.I.Sh",
      placeholder: "Xasan Asqarov Sobir O'gli",
      Only: add,
      type: "text",
      id: 1,
    },
    {
      name: "Viloyat",
      placeholder: "Qashqadaryo",
      Only: add,
      type: "text",
      id: 2,
    },
    {
      name: "Tuman",
      placeholder: "Qarshi",
      type: "text",
      Only: add,
      id: 3,
    },
    {
      name: "Mahalla",
      type: "text",
      placeholder: "Qarshi",
      Only: add,
      id: 4,
    },
    {
      name: "Xonodon kodi",
      type: "text",
      placeholder: "AA 85040703",
      Only: add,
      id: 5,
    },
  ];
  const data = [
    {
      name: "Telefon raqami",
      type: "number",
      placeholder: "+998 99 999 99 99",
      Only: add,
      id: 1,
    },
    {
      name: "Chet davlatda",
      placeholder: 0,
      type: "number",
      Only: add,
      id: 2,
    },
    {
      name: "Uy manzili",
      placeholder: "https/...",
      Only: add,
      type: "text",
      id: 3,
    },
    {
      name: "Uy raqami",
      placeholder: "12",
      type: "number",
      Only: add,
      id: 4,
    },
    {
      name: "Xonodon kodi",
      placeholder: "249 45454545",
      type: "text",
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
            <h2>{main}</h2>
            {back}
            {/* <Button btnClass={"border"} text={"Ortga"} icons={<ArrowIcon />} /> */}
          </div>
          <div className="wrapper">
            <div className="info-content">
              {Infodata.map(({ placeholder, Only, id, name, type }) => {
                return (
                  <>
                    <InputOrg
                      key={id}
                      placeholder={placeholder}
                      readOnly={Only}
                      name={name}
                      type={type}
                    />
                  </>
                );
              })}
            </div>
            <div className="info-content">
              {data.map(({ placeholder, Only, id, name, type }) => {
                return (
                  <>
                    <InputOrg
                      key={id}
                      placeholder={placeholder}
                      readOnly={Only}
                      type={type}
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
