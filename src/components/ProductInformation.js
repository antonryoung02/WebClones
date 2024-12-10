import StarRatings from "react-star-ratings";
import AmazonPriceText from "../components/AmazonPriceText";
import FreeReturnsLabel from "./FreeReturnsLabel";
import ReviewService from "../services/ReviewService";

function ProductInformation(props) {
  const product = props.product;
  const reviewService = new ReviewService(product.reviews);

  return (
    <div>
      <p className=" text-2xl">
        {product.title} - {product.description}{" "}
      </p>
      <div className="flex w-full gap-2 items-end pb-3">
        <p className="text-sm"> {reviewService.getMean()} </p>
        <StarRatings
          rating={reviewService.getMean()}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="16"
          starSpacing="1"
          name="rating"
        />
        <p className="text-sky-700 text-sm">{product.reviews.length} ratings</p>
      </div>
      <hr className="p-1"/>
      <AmazonPriceText
        showList={true}
        showPaymentPlan={true}
        discount={product.discountPercentage}
        price={product.price}
      />
      <FreeReturnsLabel />
      <div className="p-3">
        <table>
          <tr>
            <td className="font-bold">Brand</td>
            <td className="px-6">{product.brand}</td>
          </tr>
          <tr>
            <td className="font-bold">Category</td>
            <td className="px-6">{product.category}</td>
          </tr>
          <tr>
            <td className="font-bold">Product Dimensions</td>
            <td className="px-6">
              {product.dimensions.height}"H x {product.dimensions.width}"W x{" "}
              {product.dimensions.depth}"D
            </td>
          </tr>
          <tr>
            <td className="font-bold">Weight</td>
            <td className="px-6">{product.weight} lbs</td>
          </tr>
          <tr>
            <td className="font-bold">Warranty</td>
            <td className="px-6">{product.warrantyInformation}</td>
          </tr>
        </table>
      </div>
      <hr className="p"/>
      <div className="pt-2">
        <p className="font-bold text-lg">About this item </p>
        <ul className="list-disc pl-6 space-y-4">
          <li>
            The DummyJSON api does not contain a lot of product information. To
            give the "Amazon feel" I'm including hardcoded text that would be
            replaced if the item had a longer description.
          </li>
          <li>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Duis non elit
            quam egestas at inceptos. Quam aenean risus mauris aliquam tempus
            curae.
          </li>
          <li>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Mattis hac
            velit bibendum posuere diam duis praesent maximus. Aliquam dui risus
            mi erat efficitur, finibus potenti auctor volutpat. Ac velit hac
            consectetur libero vehicula inceptos penatibus. Laoreet amet posuere
            conubia varius mi platea.
          </li>
          <li>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Placerat
            sodales iaculis suscipit, porttitor orci maecenas augue. Rhoncus
            suspendisse amet quis porttitor condimentum.
          </li>
          <li>
          Lorem ipsum odor amet, consectetuer adipiscing elit. 
          Hac ultrices pretium odio vehicula ligula. Fermentum non orci massa himenaeos risus sagittis.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ProductInformation;
