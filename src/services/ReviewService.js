class ReviewService {
  constructor(reviews) {
    this.reviews = reviews;
  }

  getReviews() {
    return this.reviews;
  }

  getReviewCount() {
    return this.reviews.length;
  }

  getMean() {
    return (
      this.reviews.reduce((sum, review) => sum + review.rating, 0) /
      this.reviews.length
    );
  }

  getReviewDistribution() {
    let counts = [0, 0, 0, 0, 0];
    this.reviews.forEach((r) => {
      counts[r.rating - 1] += 1;
    });
    return counts;
  }

  getReviewsWithRating(value) {
    return this.reviews.filter((r) => r.rating === value);
  }

  getSortedReviews(ascending) {
    if (ascending) {
      this.reviews.sort((a, b) => a.rating - b.rating);
    } else {
      this.reviews.sort((a, b) => b.rating - a.rating);
    }
    return this.reviews;
  }
}

export default ReviewService;
