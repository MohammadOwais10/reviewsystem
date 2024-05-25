import { useState } from "react";
import StarRating from "./StarRating";
import ThumbsRating from "./ThumbsRating";
import TraitsSelector from "./TraitsSelector";
import TextareaSection from "./TextareaSection";
import { ReviewFormTypes } from "@/types/ReviewTypes";

const ReviewForm: React.FC<ReviewFormTypes> = ({ onClose, onSubmit }) => {
  const [safetyRating, setSafetyRating] = useState(0);
  const [communicationRating, setCommunicationRating] = useState(0);
  const [recommend, setRecommend] = useState<boolean | null>(null);
  const [traits, setTraits] = useState<string[]>([]);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    onSubmit();
  };

  return (
    <div className="fixed inset-0 bg-[#daf3f691] bg-opacity-25 flex items-center justify-center z-50">
      <div className="bg-white p-6 md:rounded-lg shadow-lg w-full max-w-lg max-h-full overflow-y-auto my-auto md:max-h-[90%]">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700"
          aria-label="Close review form"
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
        <h2 className="text-3xl font-semibold mb-8 text-black">
          Leave a review
        </h2>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-xl font-semibold text-black">Safety</h3>
          <p className="text-slate-400">How safe did you feel with Trausti?</p>
          <StarRating rating={safetyRating} setRating={setSafetyRating} />
        </div>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-xl font-semibold text-black">Communication</h3>
          <p className="text-slate-400">
            How easy was it to communicate with Trausti?
          </p>
          <StarRating
            rating={communicationRating}
            setRating={setCommunicationRating}
          />
        </div>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-xl font-semibold text-black">
            Would you recommend Trausti?
          </h3>
          <p className="text-slate-400">Your opinion won’t post publicly</p>
          <ThumbsRating recommend={recommend} setRecommend={setRecommend} />
        </div>

        <div className="border-b border-gray-200 pb-4 mb-4">
          <h3 className="text-xl font-semibold text-black">Praise</h3>
          <p className="text-slate-400">What traits best describe Trausti?</p>
          <TraitsSelector traits={traits} setTraits={setTraits} />
        </div>

        <TextareaSection
          reviewText={reviewText}
          setReviewText={setReviewText}
        />

        <button
          onClick={handleSubmit}
          className="w-full py-3 bg-green-500 text-white rounded-lg"
        >
          Publish review
        </button>
      </div>
    </div>
  );
};

export default ReviewForm;
