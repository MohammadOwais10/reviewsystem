import { TextareaSectionTypes } from "@/types/ReviewTypes";

const TextareaSection: React.FC<TextareaSectionTypes> = ({
  reviewText,
  setReviewText,
}) => {
  return (
    <div className="pb-4 mb-4">
      <h3 className="text-xl font-semibold">Care to share more?</h3>
      <p className="text-slate-400">
        How was your overall experience? What's that one thing you won’t forget
        Trausti for?
      </p>
      <textarea
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
        placeholder="Come on, you know the drill."
        className="w-full mt-2 p-2 border rounded-lg"
        aria-label="Review text"></textarea>
    </div>
  );
};

export default TextareaSection;
