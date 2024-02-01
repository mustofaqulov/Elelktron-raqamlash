import { Button } from "../Button/button";
import "./modal.scss";
import PropTypes from "prop-types";
import OpenIcon from "../../assets/icons/open.svg?react";
import { Information } from "../../pages/InformationPage/Information";

export function Modal({ open, onClose }) {
  if (!open) return null;
  return (
    <>
      <div onClick={onClose} className="close_modal"></div>
      <div className="bg-modal">
        <div className="modal">
          <div className="close-content">
            <div onClick={onClose} className="close">
              <span class="material-symbols-outlined">close</span>
            </div>
          </div>
          <div className="modal-login">
            <h2>Login</h2>
            <div className="content-box">
              <label htmlFor="email">Email</label>
              <input autoComplete="off" id="email" type="email" />
            </div>
            <div className="content-box">
              <label htmlFor="email">Password</label>
              <input autoComplete="off" id="email" type="password" />
            </div>
            <div className="login-btn">
              <Button title="Tizimga kirish" icon={<OpenIcon />} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

Modal.defaultProps = {
  open: "",
  onClose: "",
};

Modal.propTypes = {
  open: PropTypes.func,
  onClose: PropTypes.func,
};
