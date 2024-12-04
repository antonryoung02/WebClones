import ReviewDistribution from "./ReviewDistribution";
import Modal from "./Modal";
import StarRatings from "react-star-ratings";
import {useState, useRef} from "react";

import { useNavigate } from "react-router-dom";

function ReviewDistributionModal(props) {
    const reviewService = props.reviewService;
    const id = props.productId;
    const reviewRef = useRef(null);
    const [reviewModalVisible, setReviewModalVisible] = useState(false);
    const navigate = useNavigate();

    return (
        <div className=" gap-2 relative" ref={reviewRef}>
        <button className="flex flex-row items-end gap-2" onMouseEnter={() => setReviewModalVisible(true)}>
          <StarRatings
            rating={reviewService.getMean()}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="16"
            starSpacing="1"
            name="rating"
          />
          <p className="text-sky-700 text-sm">{reviewService.getReviewCount()}</p>
        </button>
        <Modal modalRef={reviewRef} isVisible={reviewModalVisible} setIsVisible={setReviewModalVisible}>
          <ReviewDistribution reviewService={reviewService} />
          <hr />
          <button onClick={() => navigate(`/product/${id}#reviews`)}><p className="text-center text-sm text-sky-700 underline">See Customer Reviews</p></button>
      </Modal>
      </div>
    )
}

export default ReviewDistributionModal;