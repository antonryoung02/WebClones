import StarRatings from "react-star-ratings";
import AmazonPriceText from "../components/AmazonPriceText";
import { BsChevronDown } from "react-icons/bs";

function ProductInformation(props) {
  const product = props.product;

  return (
    <div>
      <p className="font-semibold text-2xl">
        {product.title} - {product.description}{" "}
      </p>
      <div className="flex w-full gap-2 items-end">
        <p className="text-sm"> {product.rating} </p>
        <StarRatings
          rating={product.rating}
          starRatedColor="orange"
          numberOfStars={5}
          starDimension="16"
          starSpacing="1"
          name="rating"
        />
        <p className="text-sky-700 text-sm">{product.reviews.length} ratings</p>
      </div>
      <hr />
      <AmazonPriceText
        showList={true}
        showPaymentPlan={true}
        discount={product.discountPercentage}
        price={product.price}
      />
      <div className="flex flex-row gap-1 items-center">
        <p className="text-sky-700 text-sm">FREE Returns</p>
        <BsChevronDown style={{ strokeWidth: 1 }} />
      </div>
      <div className="pt-6">
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
      <hr />
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
        </ul>
      </div>
    </div>
  );
}

export default ProductInformation;
