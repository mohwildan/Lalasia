import type { NextPage } from "next";
import Benrfits from "../components/section/Benrfits";
import HeroSections from "../components/section/HeroSections";
import ProductSections from "../components/section/ProductSections";

const Home: NextPage = () => {
  return (
    <>
      <HeroSections />
      <Benrfits />
      <ProductSections />
    </>
  );
};

export default Home;
