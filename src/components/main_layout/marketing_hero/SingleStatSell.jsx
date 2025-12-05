export default function SingleStatSell({ title, value, des }) {
  return (
    <div className="text-white p-4 py-4 md:py-8 rounded-lg shadow-md  border border-[#3C3C3C] flex flex-col gap-2">
      <h4 className="text-[16px] font-silika uppercase">{title}</h4>
      <h3 className="text-[30px] md:text-[42px] font-blauerNue font-semibold">
        {value}
      </h3>
      <p className="font-silika">{des}</p>
    </div>
  );
}
