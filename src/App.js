import { ParallaxProvider } from "react-scroll-parallax";

import { LandingSection } from "./landing";
import { Navbar } from "./navbar";
import { CategorySection } from "./category";
import { TechSection } from "./tech";
import { WorkSection, WorkSection as MediaSection } from "./work";
import { workHistory } from "./work/work-history";
import { mediaList } from "./media/media-mentions";
import { PortfolioSection } from "./portfolio-intro";

function App() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
        <LandingSection />
        <CategorySection />
        <TechSection />
        <WorkSection id="work" data={workHistory} />
        <MediaSection id="media" data={mediaList} white />
        <PortfolioSection />
      </div>
    </ParallaxProvider>
  );
}

export default App;
