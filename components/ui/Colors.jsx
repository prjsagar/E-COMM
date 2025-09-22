import ColorSelector from './ColorSelector';
export default function Colors() {
  return (
    <>
      <div className="flex flex-col p-4 gap-8 bg-[#F6F7F8]">
        <div className="font-bold">COLORS</div>
        <ColorSelector />
      </div>
    </>
  );
}
