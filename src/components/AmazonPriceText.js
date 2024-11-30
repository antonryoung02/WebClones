import React from "react";

function AmazonPriceText(props) {
  const showList = props.showList;
  const showPaymentPlan = props.showPaymentPlan;
  const price = props.price;
  const discount = parseInt(props.discount) / 100;
  var discountPrice = price * (1.0 - discount);
  const paymentPlanPrice = Math.round((discountPrice / 5.0) * 100) / 100;
  discountPrice = Math.round(discountPrice * 100) / 100;
  const priceStr = String(discountPrice).split(".");
  const priceInDollars = priceStr[0];
  const priceInCents = priceStr[1];

  return (
    <div className="flex flex-col">
      <div className="flex flex-row gap-2 items-end">
        <div className="flex flex-row items-stretch">
          <p className="text-xs my-1">$</p>
          <p className="text-3xl">{priceInDollars}</p>
          <p className="text-xs my-1">{priceInCents}</p>
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
          Or ${paymentPlanPrice}/month for 5 months (no fees and interest).
        </p>
      )}
    </div>
  );
}

export default AmazonPriceText;
