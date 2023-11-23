import Fr from "../Assets/FrAbdElMassih.jpg";

// const onlineImgURL =
//   "https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/02/Paromeos-Monastery-e1644255830659.jpg?w=1200&ssl=1";

function Father() {
  const onlineImgURL =
    "https://i0.wp.com/landioustravel.com/wp-content/uploads/2022/02/Paromeos-Monastery-e1644255830659.jpg?w=1200&ssl=1";

  return (
    <>
      <img height={500} src={Fr} alt="Abouna" />
      <p></p>
      <img
        height={500}
        width={700}
        src={require("../Assets/AllParamos.jpg")}
        alt="Monks"
      />
      <p></p>
      <img height={500} src={onlineImgURL} alt="Monastery" />
    </>
  );
}

export default Father;
