import ProductList from "./Product-List";

type props = {
  size: number
}

const ProdctWrapper = ({ size }: props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold pt-6">Products</h2>
      <ProductList size={size} />
    </div>
  );
};

export default ProdctWrapper;
