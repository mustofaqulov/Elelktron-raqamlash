import PropTypes from "prop-types";
import "./Radio.scss";

export const Radio = ({ value, name }) => {
  return (
    <>
      <label htmlFor={value}>
        {name}
        <span>*</span>
      </label>

      <div className="container">
        <div className="kadastir">
          <label className="name">
            Bor
            <input type="radio" name="radio" value={value} id="chec" />
            <span htmlFor="chec"></span>
          </label>
        </div>
        <div className="kadastir">
          <label className="name">
            Yo&apos;q
            <input type="radio" name="radio" value={value} id="chec" />
            <span className="active" htmlFor="chec"></span>
          </label>
        </div>
      </div>
    </>
  );
};

Radio.propTypes = {
  value: PropTypes.string,
  name: PropTypes.string,
};

Radio.defaultProps = {
  value: "",
  name: "",
};
