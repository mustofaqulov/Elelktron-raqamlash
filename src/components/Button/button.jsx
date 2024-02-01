import "./button.scss";
import PropTypes from "prop-types";
import { Modal } from "../Modal/Modal";
import { useState } from "react";

export function Button({ title, icon, modalOpen }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)} />
      <button onClick={() => modalOpen && setIsOpen(!isOpen)}>
        {title} {icon}
      </button>
    </>
  );
}

Button.defaultProps = {
  title: null,
  icon: null,
  modalOpen: null,
};
Button.propTypes = {
  title: PropTypes.string,
  icon: PropTypes.node,
  modalOpen: PropTypes.string,
};
