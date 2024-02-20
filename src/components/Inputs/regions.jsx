import RegionsJson from "../../JSON/regions.json";
import DistrictsJson from "../../JSON/districts.json";
import VillageJson from "../../JSON/village.json";
import { useState, useEffect } from "react";
import { PropTypes } from "prop-types";
import { Dropdown } from "./Dropdown/DropDown";

import "./regions.scss";

export const Regions = () => {
  const [value, setValue] = useState("");
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [districts, setDistricts] = useState([]);
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    const selectedRegion = RegionsJson.find(
      (region) => region.name_uz === value
    );
    if (selectedRegion) {
      setDistricts(
        DistrictsJson.filter(
          (district) => district.region_id === selectedRegion.id
        )
      );
    }
  }, [value]);

  useEffect(() => {
    const selectedDistrict = DistrictsJson.find(
      (district) => district.name_uz === value1
    );
    if (selectedDistrict) {
      setVillages(
        VillageJson.filter(
          (village) => village.district_id === selectedDistrict.id
        )
      );
    }
  }, [value1]);

  return (
    <>
      <div className="registration">
        <div className="regions">
          <label htmlFor="">
            Viloyatlar
          </label>
          <Dropdown
            data={RegionsJson}
            placeholder="Viloyat"
            value={value}
            setValue={setValue}
          />
        </div>
        <div className="districts">
          <label htmlFor="">
            Tuman
          </label>
          <Dropdown
            data={districts}
            placeholder="Tuman"
            value={value1}
            setValue={setValue1}
          />
        </div>
        <div className="villages">
          <label htmlFor="">
            Mahalla
          </label>
          <Dropdown
            data={villages}
            placeholder="Mahalla"
            value={value2}
            setValue={setValue2}
          />
        </div>
      </div>
    </>
  );
};

Regions.propTypes = {
  data: PropTypes.array,
  value: PropTypes.string,
  setValue: PropTypes.func,
};

Regions.defaultProps = {
  data: [],
  value: "",
  setValue: () => {},
};
