import PriceRange from './PriceRange';
export default function Prices() {
  return (
    <>
      <div className="flex flex-col gap-8 p-4 bg-[#F6F7F8]">
        <div className="font-bold">PRICES</div>
        <div>
          <PriceRange />
        </div>
      </div>
    </>
  );
}
