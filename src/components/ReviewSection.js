import React, { useState } from "react";
import ReviewService from "../services/ReviewService";
import ReviewDistribution from "./ReviewDistribution";
import Review from "./Review";

function ReviewSection(props) {
  const reviewService = new ReviewService(props.reviews);
  const [reviews, setReviews] = useState(reviewService.getReviews());

  return (
    <div className="flex flex-col md:flex-row md:px-52 w-full py-12 gap-8 md:gap-20">
      <div className="w-full md:w-1/4">
        <ReviewDistribution
          distribution={reviewService.getReviewDistribution()}
          reviewCount={reviewService.getReviewCount()}
          averageRating={reviewService.getMean()}
        />
      </div>
      <div className="flex flex-col w-full md:w-2/3 gap-6">
        <p className="font-bold text-lg">Top Reviews </p>
        {reviews.map((r) => (
          <Review review={r} />
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
