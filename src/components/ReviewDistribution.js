import ReviewBar from "./ReviewBar";

function ReviewDistribution(props) {
  const distribution = props.distribution;
  const count = props.reviewCount;
  const averageRating = props.averageRating;

  return (
    <div className="flex flex-col gap-3">
      <p className="text-lg font-bold ">Customer Reviews</p>
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
