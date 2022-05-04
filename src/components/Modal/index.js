import React from "react";

const Modal = ({ setModalOpen }) => {
  return (
    <div className="fixed flex inset-0 justify-center items-center w-screen h-screen bg-gray-400/80 overflow-hidden z-10 ">
      <dialog className="flex flex-col justify-center items-center bg-white w-10/12 sm:w-8/12 max-w-md min-h-min shadow-2xl rounded-xl p-6 ">
        <h1 className="pb-4">
          Your message has been successfully sent 😎. <br /> I will contact you
          soon!
        </h1>
        <button
          onClick={() => setModalOpen(false)}
          className="bg-yellow-400 text-black rounded-lg mt-2 text-lg px-3 py-1 hover:bg-yellow-300"
        >
          Continue
        </button>
      </dialog>
    </div>
  );
};

export default Modal;
