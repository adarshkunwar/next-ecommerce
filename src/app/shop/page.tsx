import Navbar from "@/components/shared-components/navbar";
import SideBarWrapper from "@/components/shop-page/sidebar/sidebar-wrapper";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container grid grid-cols-12">
        <div className="col-span-3 border-r pr-1">
          <SideBarWrapper />
        </div>
      </div>
    </div>
  );
};
export default Home;
