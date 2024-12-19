import Banner from "./components/Home/Banner";
import News from "./components/Home/News";
import RecommendationSection from "./components/Home/Recommendation";
import TopSeller from "./components/Home/TopSeller";
import { AuthProvider } from "./context/AuthContext";

export default function Home() {
  return (
    <div>
      <Banner />
      <TopSeller />
      <RecommendationSection />
      <News />
    </div>   
  );
}
