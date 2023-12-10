import Footer from "@/components/footer";
import BountyBanner from "@/components/landing/bounty-banner";
import Features from "@/components/landing/features";
import HeroBanner from "@/components/landing/hero-banner";
import HowItWorks from "@/components/landing/how-it-works";

export default function Home() {
  return (
    <main className="text-DM-Sans flex min-h-screen flex-col items-center justify-between">
      <HeroBanner />
      <Features />
      <BountyBanner />
      <HowItWorks />
    </main>
  );
}
