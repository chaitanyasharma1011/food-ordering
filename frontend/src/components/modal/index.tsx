import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  open: boolean;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ open, children, onClose }: ModalProps) {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div
      className=" fixed top-0 bottom-0 left-0 right-0 flex justify-center items-center"
      style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
      onClick={onClose}
    >
      <div
        className="bg-white p-4 rounded-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body
  );
}
