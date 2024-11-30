import ReviewBar from "./ReviewBar";
import StarRatings from "react-star-ratings";

function ReviewDistribution(props) {
  const reviewService = props.reviewService;
  const distribution = reviewService.getReviewDistribution();
  const count = reviewService.getReviewCount();
  const averageRating = reviewService.getMean();

  return (
    <div className="flex flex-col gap-3 w-72">
      <div className="flex flex-row gap-2">
      <StarRatings
              rating={averageRating}
              starRatedColor="orange"
              numberOfStars={5}
              starDimension="16"
              starSpacing="1"
              name="rating"
            />
            <p>{averageRating} out of 5</p>
            </div>
      <p className="text-gray-400">{count} global ratings</p>
      {[...distribution].reverse().map((d, i) => (
        <ReviewBar
          key={i}
          percentage={Math.round(100 * (parseFloat(d) / parseFloat(count)))}
          label={`${distribution.length - i} star`}
        />
      ))}
    </div>
  );
}

export default ReviewDistribution;
