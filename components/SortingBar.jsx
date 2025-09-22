import { productsInfo } from '@/public/data';

export default function SortingBar() {
  const count = productsInfo.length;
  return (
    <>
      <div className="flex flex-row z-10  justify-between px-5 bg-white">
        <div className="flex flex-row gap-4 items-center">
          <div>{count} Items </div>
          <div className="flex flex-row justify-between gap-4">
            <label htmlFor="brands">Sort By </label>
            <select id="brands" name="Name">
              <option value="nike">Low to High</option>
              <option value="reebok">High to Low</option>
              {/* <option value="puma">Puma</option>
              <option value="jordan">Jordan</option> */}
            </select>
          </div>
          <div className="flex flex-row justify-between gap-4">
            <label htmlFor="brands">Show </label>
            <select id="brands" name="Name">
              <option value="3">3</option>
              <option value="6">6</option>
              <option value="9">9</option>
              <option value="12">12</option>
            </select>
          </div>
        </div>

        <div className="flex flex-row gap-2">
          <button>
            <img src="assets/grid.svg" alt="grid" />
          </button>
          <button>
            <img src="assets/list.svg" alt="grid" />
          </button>
        </div>
      </div>
    </>
  );
}
