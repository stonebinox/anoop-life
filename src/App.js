import { ParallaxProvider } from "react-scroll-parallax";
import { LandingSection } from "./landing";
import { Navbar } from "./navbar";
import { CategorySection } from "./category";
import { TechSection } from "./tech";
import { WorkSection } from "./work";

function App() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
        <LandingSection />
        <CategorySection />
        <TechSection />
        <WorkSection />
      </div>
    </ParallaxProvider>
  );
}

export default App;
