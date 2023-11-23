function Apples(props) {
  return (
    <div className="promo-section">
      <div>
        <h2>These apples are: {props.color}</h2>
      </div>
      <div>
        <h2>There are {props.number} apples.</h2>
      </div>
    </div>
  );
}
export default Apples;
