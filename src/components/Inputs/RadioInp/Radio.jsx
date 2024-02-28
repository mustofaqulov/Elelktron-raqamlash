import PropTypes from "prop-types";
import "./Radio.scss";
import { useForm } from "react-hook-form";
export const RadioInp = ({ value, name }) => {
  const {register} = useForm();
  return (
    <>
      <div className="radio-container">
        <label htmlFor={value}>{name}</label>
        <div className="radio">
          <div className="kadastir">
            <label className="name">
              <input {...register("hasCadastre")} type="radio" name="radio" value={value} id="chec" />
              <span htmlFor="chec"></span>
              Bor
            </label>
          </div>
          <div className="kadastir">
            <label className="name">
              <input {...register("hasCadastre")}  type="radio" name="radio" value={value} id="chec" />
              <span className="active" htmlFor="chec"></span>
              Yo&apos;q
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

RadioInp.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
};

RadioInp.defaultProps = {
  value: "",
  name: "",
};
