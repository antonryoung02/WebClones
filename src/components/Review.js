import StarRatings from "react-star-ratings";
import { readableDate } from "../utils";

function Review(props) {
  const review = props.review;

  return (
    <div>
      <p className="text-sm">{review.reviewerName}</p>
      <StarRatings
        rating={review.rating}
        starRatedColor="orange"
        numberOfStars={5}
        starDimension="16"
        starSpacing="1"
        name="rating"
      />
      <p className="text-gray-400">Reviewed on {readableDate(review.date)}</p>
      <p className="pt-3">{review.comment}</p>
    </div>
  );
}

export default Review;
