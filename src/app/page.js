import Contact from "./components/contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import PropertiesContainer from "./components/PropertiesContainer";
import PropertyTypes from "./components/PropertyTypes";
import SliderTxt from "./components/SliderTxt";

export default function Home() {
  return (
    <main>
      <Hero />
      <SliderTxt />
      <PropertiesContainer />
      <Contact />
      <Features />
      <PropertyTypes />
    </main>
  );
}
