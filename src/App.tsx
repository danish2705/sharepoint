import { Routes, Route, useNavigate } from "react-router-dom";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LatestUpdates } from "./components/LatestUpdates";
import { QuickLinks } from "./components/QuickLinks";
import { Playbooks } from "./components/Playbooks";
import { Community } from "./components/Community";
import { ConnectingDots } from "./components/ConnectingDots";
import { FeaturedContent } from "./components/FeaturedContent";
import { SuccessStories } from "./components/SuccessStories";
import { Resources } from "./components/Resources";
import { FAQSection } from "./components/FAQSection";
import { Footer } from "./components/Footer";
import { PlaybooksDetail } from "./components/PlaybooksDetail";
import { CommunityDetail } from "./components/CommunityDetail";
import { ConnectingDotsDetail } from "./components/ConnectingDotsDetail";
import { Toaster } from "./components/ui/sonner";
import { useEffect } from "react";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <Hero />
      <LatestUpdates />
      <QuickLinks />
      <div id="playbooks">
        <Playbooks onNavigateToDetail={() => navigate("/playbooks")} />
      </div>
      <FeaturedContent />
      <div id="community">
        <Community onNavigateToDetail={() => navigate("/community")} />
      </div>
      <div id="connect">
        <ConnectingDots
          onNavigateToDetail={() => navigate("/connecting-dots")}
        />
      </div>
      <div id="stories">
        <SuccessStories />
      </div>
      <div id="resources">
        <Resources />
      </div>
      <div id="faq">
        <FAQSection />
      </div>
    </>
  );
};

export default function App() {
  const navigate = useNavigate();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#f7faf9]">
      <Header onNavigateHome={() => navigate("/")} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/playbooks"
          element={<PlaybooksDetail onNavigateBack={() => navigate("/")} />}
        />
        <Route
          path="/community"
          element={<CommunityDetail onNavigateBack={() => navigate("/")} />}
        />
        <Route
          path="/connecting-dots"
          element={
            <ConnectingDotsDetail onNavigateBack={() => navigate("/")} />
          }
        />
      </Routes>

      <Footer />
      <Toaster position="top-right" />
    </div>
  );
}
