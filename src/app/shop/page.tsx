import Layout from "@/components/shared-components/Layout";
import Navbar from "@/components/shared-components/navbar";
import ProdctWrapper from "@/components/shared-components/product/Product-Wrapper";
import SideBarWrapper from "@/components/shop-page/sidebar/sidebar-wrapper";

const Home = () => {
  return (
    <Layout>
      <div>
        <div className="container grid grid-cols-12 my-10 gap-2">
          <div className="col-span-3 border-r pr-1 my-16">
            <SideBarWrapper />
          </div>
          <div className="col-span-9 border-r pr-1">
            <ProdctWrapper size={3} length={10} />
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default Home;
