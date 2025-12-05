export default function PanelContainer({ children }) {
  return (
    <div className="shadow w-full flex flex-col md:flex-row md:justify-between items-center md:items-center p-2 md:min-h-[70px] rounded-[12px] border gap-4 md:gap-0">
      {children}
    </div>
  );
}
