import { ThumbsRatingTypes } from "@/types/ReviewTypes";

const ThumbsRating: React.FC<ThumbsRatingTypes> = ({
  recommend,
  setRecommend,
}) => {
  return (
    <div className="flex space-x-4 mt-2">
      <button
        onClick={() => setRecommend(true)}
        aria-label="Recommend"
        className={`flex items-center ${
          recommend === true
            ? "text-green-500 cursor-pointer"
            : "text-gray-300 cursor-pointer"
        }`}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2">
          <path d="M7 10v12" />
          <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
        <h5
          className={`font-medium px-2 ${
            recommend === true ? "text-green-500" : "text-gray-500"
          }`}>
          Yes
        </h5>
      </button>

      <button
        onClick={() => setRecommend(false)}
        aria-label="Do not recommend"
        className={`flex items-center ${
          recommend === false
            ? "text-red-500 cursor-pointer"
            : "text-gray-300 cursor-pointer"
        }`}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2">
          <path d="M17 14V2" />
          <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
        </svg>
        <h5
          className={`font-medium px-2 mb-1 ${
            recommend === false ? "text-red-500" : "text-gray-500"
          }`}>
          No
        </h5>
      </button>
    </div>
  );
};

export default ThumbsRating;
