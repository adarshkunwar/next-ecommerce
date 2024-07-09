import CategoriesWrapper from "@/components/home-page/Categories-Wrapper";
import { HeroCarousel } from "@/components/home-page/HeroCarousel";
import ProdctWrapper from "@/components/home-page/product/Product-Wrapper";
import Navbar from "@/components/shared-components/navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container bg-gray-100">
        <HeroCarousel />
        <CategoriesWrapper />
        <ProdctWrapper />
      </div>
    </div>
  );
};
export default Home;
