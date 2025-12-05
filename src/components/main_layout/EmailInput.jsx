export default function EmailInput() {
  return (
    <div className="relative">
      <input
        type="email"
        placeholder="Enter your email here"
        className="bg-[#3B3B4B] text-white px-4   py-5 md:py-6 pr-40 rounded-[100px] w-full focus:outline-none md:min-w-[516px]"
      />
      <button className="absolute right-1 top-1 bg-gradient-to-r from-[#693FFFFC] to-[#C02EE5] text-white px-6 py-3 rounded-[50px] font-medium hover:opacity-90 transition-opacity">
        <div className="text-center">
          <p className="font-silika text-[14px] md:text-[16px] font-semibold">
            Start for Free
          </p>
          <p className="font-silika text-[10px] md:text-xs">
            No Credit Card Required
          </p>
        </div>
      </button>
      <p className="font-silika text-[12px] md:text-sm text-center py-2">
        By proceeding you agree to our Platform terms & Privacy Notice
      </p>
    </div>
  );
}
