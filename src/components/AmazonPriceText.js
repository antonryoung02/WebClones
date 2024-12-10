import React from "react";
import {priceService} from "../services/PriceService";

function AmazonPriceText({showList, showPaymentPlan, price, discount}) {
  const numMonths = 5;
  const discountPrice = priceService.getDiscountPrice(price, discount);
  const paymentPlanPrice = priceService.getPaymentPlanPrice(price, discount, numMonths)

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 items-end">
        <div className="flex flex-row items-stretch">
          <p className="text-xs my-1">$</p>
          <p className="text-3xl">{discountPrice.split('.')[0]}</p>
          <p className="text-xs my-1">{discountPrice.split('.')[1]}</p>
        </div>
        {showList && discount > 0.0 && (
          <div className="flex text-gray-600 gap-1 text-sm">
            <p>List: </p>
            <p className="line-through">${price}</p>
          </div>
        )}
      </div>
      {showPaymentPlan && price > 25 && (
        <p className="text-gray-600 text-sm">
          Or ${paymentPlanPrice}/month for {numMonths} months (no fees and interest).
        </p>
      )}
    </div>
  );
}

export default AmazonPriceText;
