import Contact from "./components/contact";
import Hero from "./components/Hero";
import PropertiesContainer from "./components/PropertiesContainer";
import SliderTxt from "./components/SliderTxt";

export default function Home() {
  return (
    <main>
      <Hero />
      <SliderTxt />
      <PropertiesContainer />
      <Contact />
    </main>
  );
}
