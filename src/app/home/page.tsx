import CategoriesWrapper from "@/components/home-page/Categories-Wrapper";
import { HeroCarousel } from "@/components/home-page/HeroCarousel";
import ProdctWrapper from "@/components/shared-components/product/Product-Wrapper";
import Layout from "@/components/shared-components/Layout";
import Navbar from "@/components/shared-components/navbar";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="container bg-gray-100">
          <HeroCarousel />
          <CategoriesWrapper />
          <ProdctWrapper size={4} />
        </div>
      </div>
    </Layout>
  );
};
export default Home;
