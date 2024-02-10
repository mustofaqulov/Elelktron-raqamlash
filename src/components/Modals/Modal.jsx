import PropTypes from "prop-types";
import { useEffect } from "react";
import "./modal.scss";

export function Modal({ open, onClose, change, notchange, title, text }) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  if (!open) return null;

  return (
    <div onClick={onClose} className="overlay">
      <div className="modal">
        <h3> {title}</h3>
        <p>{text}</p>
        <div className="modal-btn">
          <div onClick={onClose} className="close">
            {change}
          </div>
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
