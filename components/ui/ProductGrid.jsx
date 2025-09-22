import ProductCard from './ProductCard';
export default function ProductGrid({ productsInfo }) {
  return (
    <>
      <div className="grid grid-cols-3 gap-4">
        {productsInfo.map((item) => (
          <ProductCard key={item.id} {...item} />
        ))}
      </div>
    </>
  );
}
