import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number; // e.g., 3 or 2.3
  maxRating?: number; // default 5
}


const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const stars = [];

  for (let i = 1; i <= maxRating; i++) {
    if (i <= Math.floor(rating)) {
      // Full star
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400" />);
    } else if (i - 0.5 <= rating) {
      // Half star (optional, we’ll simulate with gradient)
      stars.push(
        <Star
          key={i}
          className="w-4 h-4 text-yellow-400"
          style={{ clipPath: "inset(0 50% 0 0)" }} // left half colored
        />
      );
    } else {
      // Empty star
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
    }
  }

  return <div className="flex gap-1">{stars}</div>;
};

export default StarRating;
