import BrandsList from './BrandList';
export default function HotDeals({ brandsList }) {
  return (
    <>
      <div className="flex  flex-col gap-8 p-4 bg-[#F6F7F8] z-10">
        <div className="font-bold">Hot Deals</div>
        <BrandsList brandsList={brandsList} />
      </div>
    </>
  );
}
