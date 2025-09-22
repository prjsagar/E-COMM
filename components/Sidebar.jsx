import { hotDealsBrandsName } from '@/public/data';
import { brandsList } from '@/public/data';
import Prices from './ui/Prices';
import Colors from './ui/Colors';
import Brands from './ui/Brands';
import HotDeals from './ui/HotDeals';

export default function Sidebar() {
  return (
    <>
      <div className="flex flex-col gap-10  m-2 h-screen w-1/4 ">
        <HotDeals brandsList={hotDealsBrandsName} />
        <Prices />
        <Colors />
        <Brands brandsList={brandsList} />
        <div className="font-bold text-center z-10 ">MORE</div>
      </div>
    </>
  );
}
