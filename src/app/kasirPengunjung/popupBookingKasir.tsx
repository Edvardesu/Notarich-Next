import React from "react";
import "react-datepicker/dist/react-datepicker.css";

const PopupBookingKasir = (
  isOpen: boolean,
  closePopup: () => void,
  onConfirm: () => void
) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg relative w-3/4 max-w-lg">
          <button
            className="absolute top-2 right-2 text-2xl font-bold"
            onClick={closePopup}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-2">
            Apakah sudah Available?
          </h2>
          <h2 className="text-base font-normal mb-4 text-neutral-500">
            Are you sure you want to accept this?
          </h2>

          <div className="flex justify-center space-x-2 mt-4">
            <button
              className="bg-white px-16 py-2 rounded border-[#FF8A00] border-2 text-[#FF8A00]"
              onClick={closePopup}
            >
              No, cancel
            </button>
            <button
              className="bg-[#FF8A00] px-16 py-2 rounded text-white"
              onClick={onConfirm}
            >
              Yes, confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PopupBookingKasir;
