import CategoriesWrapper from "@/components/home-page/Categories-Wrapper"
import Navbar from "@/components/shared-components/navbar"

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container bg-red-300">
        <CategoriesWrapper />
      </div>
    </div>
  )
}
export default Home
