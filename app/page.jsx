'use client';
import Banner from '@/components/Banner';
import SortingBar from '@/components/SortingBar';
import Sidebar from '@/components/Sidebar';
import ProductCard from '@/components/ui/ProductCard';
import { productsInfo } from '@/public/data';
import ProductGrid from '@/components/ui/ProductGrid';
import Pagination from '@/components/ui/Pagination';

export default function Home() {
  return (
    <main>
      <div className="flex flex-row  justify-between">
        <Sidebar />

        <div className="flex flex-col h-full mx-4 gap-2 ">
          <Banner />
          <SortingBar />
          <ProductGrid productsInfo={productsInfo} />
          <Pagination />
        </div>
      </div>
    </main>
  );
}
