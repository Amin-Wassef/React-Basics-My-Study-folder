import PromoHeading from "./PromoHeading";
import data from "./Data";

function Promo() {
  return (
    <PromoHeading heading={data.heading} callToAction={data.callToAction} />
  );
}

export default Promo;
