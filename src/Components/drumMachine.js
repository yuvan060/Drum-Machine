import kick from "./kick.mp3";
import kickHat from "./kick-hat.mp3";
import openHH from "./open-hh.mp3";
import clap from "./clap.mp3";
import closedHH from "./closed-hh.mp3";
import heater1 from "./Heater-1.mp3";
import heater2 from "./Heater-2.mp3";
import heater3 from "./Heater-3.mp3";
import heater4 from "./Heater-4_1.mp3";
import "./styleDrum.css";
function App() {
  document.addEventListener(
    "keydown",
    (event) => {
      var name = event.key;
      //   var code = event.code;
      switch (name) {
        case "q":
          playSound(kick);
          break;
        case "w":
          playSound(openHH);
          break;
        case "s":
          playSound(closedHH);
          break;
        case "e":
          playSound(clap);
          break;
        case "a":
          playSound(heater1);
          break;
        case "d":
          playSound(heater2);
          break;
        case "z":
          playSound(heater3);
          break;
        case "c":
          playSound(heater4);
          break;
        case "x":
          playSound(kickHat);
          break;
        default:
          break;
      }
    },
    false
  );
  function playSound(sound) {
    const audio = new Audio(sound);
    audio.play();
  }

  return (
    <div>
      <button onClick={() => playSound(kick)}>Kick</button>
      <button onClick={() => playSound(kickHat)}>Kick-n'-Hat</button>
      <button onClick={() => playSound(openHH)}>Open-HH</button>
      <button onClick={() => playSound(clap)}>Clap</button>
      <button onClick={() => playSound(closedHH)}>Closed-HH</button>
      <button onClick={() => playSound(heater1)}>Heater 1</button>
      <button onClick={() => playSound(heater2)}>Heater 2</button>
      <button onClick={() => playSound(heater3)}>Heater 3</button>
      <button onClick={() => playSound(heater4)}>heater 4</button>
    </div>
  );
}

export default App;
