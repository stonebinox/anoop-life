import { ParallaxProvider } from "react-scroll-parallax";
import { LandingSection } from "./landing";
import { Navbar } from "./navbar";

function App() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
        <LandingSection />
      </div>
    </ParallaxProvider>
  );
}

export default App;
