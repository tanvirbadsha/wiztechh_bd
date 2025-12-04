export default function PanelContainer({ children }) {
  return (
    <div className="shadow w-full flex justify-between items-center p-2 min-h-[70px] rounded-[12px] border">
      {children}
    </div>
  );
}
