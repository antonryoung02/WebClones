import React, { useState } from "react";
import ReviewService from "../services/ReviewService";
import ReviewDistribution from "./ReviewDistribution";
import Review from "./Review";

function ReviewSection(props) {
  const reviewService = new ReviewService(props.reviews);
  const [reviews, setReviews] = useState(reviewService.getReviews());

  return (
    <div className="flex flex-col lg:flex-row w-full py-12 gap-12 lg:px-16 lg:gap-32">
      <div className="flex flex-col w-full lg:w-1/4 gap-6">
      <p className="text-2xl font-bold ">Customer Reviews</p>
        <ReviewDistribution
         reviewService={reviewService} 
        />
      </div>
      <div className="flex flex-col w-full lg:w-2/3 gap-6">
        <p className="font-bold text-lg">Top Reviews </p>
        {reviews.map((r, i) => (
          <Review key={i} review={r} />
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
