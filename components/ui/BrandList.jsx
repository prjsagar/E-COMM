export default function BrandsList({ brandsList }) {
  return (
    <>
      <div className="w-full bg-[#F6F7F8]">
        <ul className="flex flex-col gap-6">
          {brandsList.map((item) => (
            <li key={item.id} className="flex flex-row justify-between">
              <div className="hover:text-cyan-400">{item.name}</div>
              <div className="text-gray-500">{item.quantity}</div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
