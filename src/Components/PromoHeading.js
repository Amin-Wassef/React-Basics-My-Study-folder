import React from "react";

//Function declaration
function PromoHeading(props) {
  return (
    <div style={{ color: "olivedrab", backgroundColor: "paleturquoise" }}>
      <h2>{props.heading}</h2>
      <h2>{props.callToAction}</h2>
    </div>
  );
}

export default PromoHeading;

//Function Epression
/*
const PromoHeading = function(props) {
  return (
    <div style={{ color: "olivedrab", backgroundColor: "paleturquoise" }}>
      <h2>{props.heading}</h2>
      <h2>{props.callToAction}</h2>
    </div>
  );
}
**/

//Arrow Function (depending on Function Expression)
/*
const PromoHeading = (props) => {
  return (
    <div style={{ color: "olivedrab", backgroundColor: "paleturquoise" }}>
      <h2>{props.heading}</h2>
      <h2>{props.callToAction}</h2>
    </div>
  );
}
**/

/*
Notes for arrow function:
  *If the parameter is only 1 we can neglect the usage of () >> const PromoHeading = props => {}
    **If the parameters are anything than 1 using () is a must (even if there is "no" parameters) >>
      const PromoHeading = () => {}
        ***If all the function is written in the same line, the return is called  implicit return
           and {} can be neglected
        const PromoHeading = () =>
        const PromoHeading = (props) =>
**/
