import PromoHeading from "./PromoHeading";
import data from "./Data";

function Side() {
  return (
    <PromoHeading heading={data.heading} callToAction={data.callToAction} />
  );
}

export default Side;
