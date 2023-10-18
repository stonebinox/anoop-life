import { ParallaxProvider } from "react-scroll-parallax";

import { LandingSection } from "./landing";
import { Navbar } from "./navbar";
import { CategorySection } from "./category";
import { TechSection } from "./tech";
import { WorkSection, WorkSection as MediaSection } from "./work";
import { workHistory } from "./work/work-history";
import { mediaList } from "./media/media-mentions";
import { PortfolioSection } from "./portfolio-intro";
import { PortfolioListSection } from "./portfolio";
import { Footer } from "./footer";

function App() {
  return (
    <ParallaxProvider>
      <div>
        <Navbar />
        <LandingSection />
        <CategorySection />
        <TechSection />
        <WorkSection id="work" data={workHistory} title="Work History" />
        <MediaSection
          id="media"
          data={mediaList}
          white
          title="Media Mentions"
        />
        <PortfolioSection />
        <PortfolioListSection />
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
