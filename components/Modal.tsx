import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Close from "../public/assets/icons/close.svg";
import Container from "./container";

type ModalProps = {
  show: boolean;
  onClose: () => any;
  children?: React.ReactElement | null;
  title?: string;
};

const Modal = (props: ModalProps) => {
  const [isBrowser, setIsBrowser] = useState(false);

  const { onClose, show, children, title } = props;

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75 z-40">
      <Container>
        <div className="bg-modalBackground flex-grow rounded-4xl p-4 sm:p-12">
          <div className="flex justify-end text-2xl mr-6">
            <button onClick={handleCloseClick}>
              <Close />
            </button>
          </div>
          <div className="pt-3 m-4">{children}</div>
        </div>
      </Container>
    </div>
  ) : null;

  if (isBrowser) {
    const element = document.getElementById("modal-root");
    if (element) {
      return ReactDOM.createPortal(modalContent, element);
    } else {
      return null;
    }
  } else {
    return null;
  }
};

export default Modal;
