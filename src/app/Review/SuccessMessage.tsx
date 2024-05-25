import React from "react";

type SuccessMessageProps = {
  onClose: () => void;
};

const SuccessMessage: React.FC<SuccessMessageProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-[#daf3f691] bg-opacity-25  flex items-center justify-center z-50">
      <div className="bg-white p-6 md:rounded-lg shadow-lg w-full h-screen md:h-auto max-w-md text-center my-auto flex flex-col justify-center">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 float-right hidden md:block"
          aria-label="Close success message"
        >
          <svg
            width="36"
            height="36"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-4 text-black">Thank you!</h2>
        <p className="mb-4 text-black">
          Your review has been successfully submitted.
        </p>
        <p className="text-sm text-gray-600">We appreciate your feedback.</p>
        <img src="/success.gif" alt="Success" className="mx-auto mb-4" />
        <button
          onClick={onClose}
          className="w-full py-3 bg-green-500 text-white rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccessMessage;
