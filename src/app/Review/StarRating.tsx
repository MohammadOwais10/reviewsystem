import Star from "../../components/Star/Star";
import { StarRatingTypes } from "@/types/ReviewTypes";

const StarRating: React.FC<StarRatingTypes> = ({ rating, setRating }) => {
  return (
    <div className="flex space-x-2 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          filled={rating >= star}
          onClick={() => setRating(star)}
        />
      ))}
    </div>
  );
};

export default StarRating;
