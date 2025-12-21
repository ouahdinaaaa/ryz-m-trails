import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { DiscoverCardsSection } from "@/components/home/DiscoverCardsSection";
import { WhyWeRunSection } from "@/components/home/WhyWeRunSection";
import { ForWhomSection } from "@/components/home/ForWhomSection";
import { StoriesSection } from "@/components/home/StoriesSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <DiscoverCardsSection />
      <WhyWeRunSection />
      <ForWhomSection />
      <StoriesSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
