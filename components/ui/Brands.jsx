import BrandsList from './BrandList';

export default function Brands({ brandsList }) {
  return (
    <>
      <div className="flex flex-col p-4 gap-8 bg-[#F6F7F8]">
        <div className="font-bold">BRANDS</div>
        <BrandsList brandsList={brandsList} />
      </div>
    </>
  );
}
