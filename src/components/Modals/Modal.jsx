import PropTypes from "prop-types";
import "./modal.scss";

export function Modal({ open, onClose, change, notchange, title, text }) {
  if (!open) return null;
  return (
    <div>
      <div onClick={onClose} className="overlay"></div>
      <div className="modal">
        <h3> {title}</h3>
        <p>{text}</p>
        <div className="modal-btn">
          {change}
          {notchange}
        </div>
      </div>
    </div>
  );
}

Modal.defaultProps = {
  open: {},
  title: {},
  text: {},
  change: {},
  notchange: {},
  onClose: {},
};

Modal.propTypes = {
  open: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  change: PropTypes.node,
  notchange: PropTypes.node,
  onClose: PropTypes.node,
};
