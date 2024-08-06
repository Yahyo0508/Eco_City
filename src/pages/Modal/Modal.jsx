import React from "react";

const Modal = () => {
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn bg-gray-400"
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        More details
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h2 className="font-bold text-3xl">User complaint:</h2>
          <img
            src="public/1000_F_377377117_9YJuLVY6ecXHjGT2QvwbeOedWUIuAWr9.jpg"
            className="  "
            alt=""
          />
          <div className="border-2 bg-grey"></div>
          <p>Chorsu</p>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
