import { Header } from "../Header/Header";
import PropTypes from "prop-types";
// import { InputOrg } from "../Inputs/InputOrg/InputOrg";
import { RadioInp } from "../Inputs/RadioInp/Radio";
// import { Button } from "../Button/Button";
import "./information.scss";
// import { Dropdown } from "../Inputs/Dropdown/DropDown";
import { Regions } from "../Inputs/regions";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import { postFetch } from "../../services/post/post.fetch.js";

export function Information({ add, btn, btnError, main, back, time }) {
  const Infodata = [
    {
      name: "F.I.Sh",
      placeholder: "Xasan Asqarov Sobir O'gli",
      Only: add,
      type: "text",
      id: 1,
      objKey: "fullName",
    },
    // {
    //   name: "Viloyat",
    //   placeholder: "Qashqadaryo",
    //   Only: add,
    //   type: "text",
    //   id: 2,
    // },
    // {
    //   name: "Tuman",
    //   placeholder: "Qarshi",
    //   type: "text",
    //   Only: add,
    //   id: 3,
    // },
    // {
    //   name: "Mahalla",
    //   type: "text",
    //   placeholder: "Qarshi",
    //   Only: add,
    //   id: 4,
    // },
    {
      name: "Yashash joyi",
      type: "text",
      placeholder: "",
      Only: add,
      id: 5,
      objKey: "homeAddress",
    },
    {
      name: "Xonodon kodi",
      type: "text",
      placeholder: "AA 85040703",
      Only: add,
      id: 5,
      objKey: "homeCode",
    },
  ];
  const data = [
    {
      name: "Uy raqami",
      type: "number",
      placeholder: "",
      Only: add,
      id: 1,
      objKey: "homeNumber",
    },
    {
      name: "Telefon raqami",
      placeholder: "+998",
      type: "number",
      Only: add,
      id: 2,
      objKey: "phoneNumber",
    },
    {
      name: "Oila soni",
      placeholder: "0",
      Only: add,
      type: "number",
      id: 3,
      objKey: "numberOfFamilyMembers",
    },
    {
      name: "Chet davlatda",
      placeholder: "",
      type: "number",
      Only: add,
      id: 4,
      objKey: "theNumberOfHouseholdsInAForeignCountry",
    },
    {
      name: "Uy koordinatalari",
      placeholder: "",
      type: "text",
      Only: add,
      id: 5,
      objKey: "homeLocation",
    },
  ];
  const { register, handleSubmit } = useForm();
  const [formData, setFormData] = useState(null);
  // console.dir(useForm());
  console.log(formData);
  useEffect(() => {
    postFetch(formData);
  }, [formData]);

  const removePreverDefault = (e) => {
    e.preventDefault();
  };
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
          <form
            className="wrapper"
            onSubmit={
              (removePreverDefault,
              handleSubmit((data) =>
                setFormData(JSON.parse(JSON.stringify(data)))
              ))
            }
          >
            <div className="info-content">
              {Infodata.map(({ name, type, objKey }) => {
                return (
                  <>
                    <label>{name}</label>
                    <div className="search">
                      <input
                        type={type}
                        // placeholder={placeholder}
                        {...register(objKey)}
                      />
                    </div>
                    {/* <InputOrg
                      key={id}
                      // placeholder={placeholder}
                      readOnly={Only}
                      name={name}
                      type={type}
                      objKey={objKey}
                    /> */}
                  </>
                );
              })}
              <Regions />
            </div>
            <div className="info-content">
              {data.map(({ name, type, objKey }) => {
                return (
                  <>
                    <label>{name}</label>
                    <div className="search">
                      <input
                        type={type}
                        // placeholder={placeholder}
                        {...register(objKey)}
                      />
                    </div>
                    {/* <InputOrg
                      key={id}
                      // placeholder={placeholder}
                      readOnly={Only}
                      type={type}
                      name={name}
                      objKey={objKey}
                    /> */}
                  </>
                );
              })}
              <label htmlFor="">Kadastir</label>
              <RadioInp />
            </div>
            <div className="sort">
              {/* <input type="submit" /> */}
              {btn}
              {btnError}
            </div>
          </form>
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
