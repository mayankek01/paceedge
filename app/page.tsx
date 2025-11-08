import Image from "next/image";
import HeroSection from "./landing/Page";
export default function Home() {
  return (
    <div className="min-h-screen bg-white min-w-screen">
      <main className="bg-white">
        <HeroSection />
      </main>
    </div>
  );
}
