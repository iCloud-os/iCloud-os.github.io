import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import FeatureTiles from "../components/FeatureTiles";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#1c1c1c] flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col">
        <HeroSection />
        <FeatureTiles />
      </div>
      <Footer />
    </main>
  );
}
