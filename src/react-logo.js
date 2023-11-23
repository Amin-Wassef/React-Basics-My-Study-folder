import logo from "./logo.svg";

//Iimporting the logo.svg should be to a component in the src folder and nor allowed in the component folder
//even by moving the logo.svg into the components folder it still not allowed

function ReactLogo() {
  const react_logo = (
    <img
      style={{
        width: 200,
        height: 300,
      }}
      src={logo}
      alt="logo"
    />
  );
  return react_logo;
}

export default ReactLogo;
