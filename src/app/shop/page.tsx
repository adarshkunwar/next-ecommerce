import Navbar from "@/components/shared-components/navbar";
import SideBarWrapper from "@/components/shop-page/sidebar/sidebar-wrapper";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container bg-gray-100">
        <SideBarWrapper />
      </div>
    </div>
  );
};
export default Home;
