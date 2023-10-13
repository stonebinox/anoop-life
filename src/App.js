import { ParallaxProvider } from "react-scroll-parallax";
import { LandingSection } from "./landing";
import { Navbar } from "./navbar";
import { CategorySection } from "./category";

function App() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
        <LandingSection />
        <CategorySection />
      </div>
    </ParallaxProvider>
  );
}

export default App;
