export default function CheckboxGroup({
  category,
  options,
  selected,
  onChange,
}) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <input
            type="checkbox"
            checked={selected[option] || false}
            onChange={(e) => onChange(category, option, e.target.checked)}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
          />
          <span className="text-[16px] font-medium">{option}</span>
        </label>
      ))}
    </div>
  );
}
