import PropTypes from "prop-types";
import "./Radio.scss";

export const RadioInp = ({ value, name }) => {
  return (
    <>
      <div className="radio-container">
        <label htmlFor={value}>{name}</label>
        <div className="radio">
          <div className="kadastir">
            <label className="name">
              <input type="radio" name="radio" value={value} id="chec" />
              <span htmlFor="chec"></span>
              Bor
            </label>
          </div>
          <div className="kadastir">
            <label className="name">
              <input type="radio" name="radio" value={value} id="chec" />
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
