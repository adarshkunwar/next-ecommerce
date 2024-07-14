import ProductList from "./Product-List";

type props = {
  size: number,
  length: number
}

const ProdctWrapper = ({ size, length }: props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold pt-6">Products</h2>
      <ProductList size={size} length={length} />
    </div>
  );
};

export default ProdctWrapper;
