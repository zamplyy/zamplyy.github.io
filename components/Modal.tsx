import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Close from "../public/assets/icons/close.svg";

type ModalProps = {
  show: boolean;
  onClose: () => any;
  children: React.ReactElement;
  title: string;
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
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-800 bg-opacity-75">
      <div className="bg-white w-96 h-96 rounded-2xl p-4">
        <div className="flex justify-end text-2xl">
          <button onClick={handleCloseClick}>
            <Close />
          </button>
        </div>
        {title && <h2>{title}</h2>}
        <div className="pt-3">{children}</div>
      </div>
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
