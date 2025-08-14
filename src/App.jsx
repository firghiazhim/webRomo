import AudioPlayer from "./components/audioplayer/Audioplayer";
import Hero from "./components/hero/Hero";
import Hope from "./components/hope/Hope";
import Navbar from "./components/navbar/Navbar";
import We from "./components/we/We";
import You from "./components/you/You";
import { useEffect } from "react";

// AOSS
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  });
  return (
    <div>
      <Navbar />
      <Hero />
      <You />
      <We />
      <Hope />
      <AudioPlayer />
    </div>
  );
};

export default App;
