import { Header } from "../Header/Header";
import PropTypes from "prop-types";
import { InputOrg } from "../Inputs/InputOrg/InputOrg";
import { RadioInp } from "../Inputs/RadioInp/Radio";
import { Button } from "../Button/Button";

import "./information.scss";

export function Information({ add, btn, btnError, main, back, time, map }) {
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
      name: "Yashash joyi",
      type: "text",
      placeholder: "",
      Only: add,
      id: 5,
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
      name: "Uy raqami",
      type: "number",
      placeholder: "",
      Only: add,
      id: 1,
    },
    {
      name: "Telefon raqami",
      placeholder: +998,
      type: "number",
      Only: add,
      id: 2,
    },
    {
      name: "Oila soni",
      placeholder: "",
      Only: add,
      type: "number",
      id: 3,
    },
    {
      name: "Chet davlatda",
      placeholder: "",
      type: "number",
      Only: add,
      id: 4,
    },
    {
      name: "Uy koordinatalari",
      placeholder: "",
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
            <div className="content">
              <h2>{main}</h2>
              <p>{time}</p>
            </div>
            {back}
          </div>
          <div className="wrapper">
            <div className="info-content">
              {Infodata.map(({ Only, id, name, type }) => {
                return (
                  <>
                    <InputOrg
                      key={id}
                      // placeholder={placeholder}
                      readOnly={Only}
                      name={name}
                      type={type}
                    />
                  </>
                );
              })}
            </div>
            <div className="info-content">
              {data.map(({ Only, id, name, type }) => {
                return (
                  <>
                    <InputOrg
                      key={id}
                      // placeholder={placeholder}
                      readOnly={Only}
                      type={type}
                      name={name}
                    />
                  </>
                );
              })}
              <label htmlFor="">kordinata</label>
              <RadioInp />
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
  main: null,
  time: null,
  back: null,
  map: null,
};

Information.propTypes = {
  add: PropTypes.bool,
  btn: PropTypes.object,
  btnError: PropTypes.bool,
  time: PropTypes.bool,
  main: PropTypes.string,
  back: PropTypes.node,
  map: PropTypes.node,
};
