"use client";
import { useState } from "react";
import ReviewForm from "./Review/ReviewForm";
import SuccessMessage from "./Review/SuccessMessage";

export default function Home() {
  const [isReviewFormOpen, setReviewFormOpen] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleReviewSubmit = () => {
    setReviewFormOpen(false);
    setShowSuccess(true);
  };

  const closeSuccessMessage = () => {
    setShowSuccess(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white ">
      <h1 className="text-3xl text-center font-bold mb-8 text-slate-800">
        Welcome to Review System
      </h1>

      <button
        onClick={() => setReviewFormOpen(true)}
        className="bg-green-500 hover:bg-green-600 font-semibold text-white py-3 px-6 rounded-lg shadow-lg mb-8 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Leave a Review
      </button>
      {isReviewFormOpen && (
        <ReviewForm
          onSubmit={handleReviewSubmit}
          onClose={() => setReviewFormOpen(false)}
        />
      )}
      {showSuccess && <SuccessMessage onClose={closeSuccessMessage} />}
    </div>
  );
}
