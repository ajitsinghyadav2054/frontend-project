import HeroIntro from "./HeroIntro";
import HeroWhyChooseUs from "./HeroWhyChooseUs";

const HeroSection = () => {
  return (
    <div>
      <HeroIntro />
      <section id="why">
        <HeroWhyChooseUs />
      </section>
    </div>
  )
}

export default HeroSection
