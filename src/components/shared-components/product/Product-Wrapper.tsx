import ProductList from "./Product-List";

type props = {
  size: number,
  length: number
  variant?: 'filtered'
}

const ProdctWrapper = ({ size, length, variant }: props) => {
  return (
    <div>
      <h2 className="text-2xl font-bold pt-6">Products</h2>
      <ProductList size={size} length={length} variant={variant} />
    </div>
  );
};

export default ProdctWrapper;
