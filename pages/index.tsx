import type { NextPage } from "next";
import Benrfits from "../components/section/Benrfits";
import HeroSections from "../components/section/HeroSections";
import OurProductSections from "../components/section/OurProductSections";
import ProductSections from "../components/section/ProductSections";
import TestimonialSection from "../components/section/TestimonialSection";

const Home: NextPage = () => {
  return (
    <>
         <HeroSections />
      <Benrfits />
      <ProductSections />
      <OurProductSections />
      <TestimonialSection />
    </>
  );
};

export default Home;
