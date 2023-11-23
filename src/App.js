// import logo from "../logo.svg";
import "./App.css";
import Headder from "./Components/Headder";
import Time from "./Components/Time";
import Bag from "./Components/propsDOTchildren/Bags";
import Apples from "./Components/propsDOTchildren/Apple";
import Pears from "./Components/propsDOTchildren/Pears";

function App() {
  const date = new Date();
  //Passes data to Headders so this is the PARENT
  return (
    <>
      <div>
        <Headder name="My name is Africa" identity="I am a Continent" />
        <Time message={date.toLocaleTimeString()} />
      </div>
      <p></p>
      <p></p>
      <div>
        <Bag children={<Apples color="yellow" number="3" />}></Bag>
        <Bag children={<Pears friend="Peto"></Pears>} />
      </div>
    </>
  );
}

/**
 * Concerning props.children, they can be written in more syntaxes and all of them are correct:
 * 
 *  <Bag>
      <Apples color="yellow" number="5" />
    </Bag>

    <Bag>
      <Pears friend="Peter"><Pears>
    </Bag>
  
 *   [OR]

 *  <Trunk>
      <Bag>
        <Apples color="yellow" number="5" />
        <Pears friend="Peter" />
      </Bag>
    </Trunk>
 */

export default App;
