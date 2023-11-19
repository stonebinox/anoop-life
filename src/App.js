import { ParallaxProvider } from "react-scroll-parallax";
import { useState } from "react";

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
  const [category, setCategory] = useState("tech");
  return (
    <ParallaxProvider>
      <div style={{ overflow: "hidden" }}>
        <Navbar />
        <LandingSection />
        <CategorySection
          setCategory={setCategory}
          selectedCategory={category}
        />
        {category === "tech" && (
          <>
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
          </>
        )}
        <Footer />
      </div>
    </ParallaxProvider>
  );
}

export default App;
