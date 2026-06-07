import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Problem } from "@/components/sections/Problem";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Evidence } from "@/components/sections/Evidence";
import { WhoPays } from "@/components/sections/WhoPays";
import { HKFit } from "@/components/sections/HKFit";
import { Roadmap } from "@/components/sections/Roadmap";
import { Team } from "@/components/sections/Team";

export default function Page() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Problem />
        <HowItWorks />
        <Evidence />
        <WhoPays />
        <HKFit />
        <Roadmap />
        <Team />
      </main>
    </>
  );
}
