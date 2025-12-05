import { Minus } from "lucide-react";
import { useState } from "react";
import CheckboxGroup from "./CheckboxGroup";

export default function CustomAccordion({ data }) {
  const [openItems, setOpenItems] = useState(() => {
    const initial = {};
    Object.keys(data).forEach((key) => {
      initial[key] = true;
    });
    return initial;
  });
  const [selectedFilters, setSelectedFilters] = useState({});

  const toggleItem = (key) => {
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  const handleCheckboxChange = (category, option, checked) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [option]: checked,
      },
    }));
  };

  return (
    <div className="flex flex-col gap-4">
      {Object.entries(data).map(([key, options]) => (
        <div key={key} className="shadow w-full p-2 rounded-[12px] border">
          <button
            onClick={() => toggleItem(key)}
            className="w-full flex items-center justify-between p-3 hover:bg-gray-100 transition-colors"
          >
            <span className="font-semibold text-[20px] capitalize">{key}</span>
            <Minus
              className={`h-4 w-4 transition-transform ${
                openItems[key] ? "rotate-180" : ""
              }`}
            />
          </button>
          {openItems[key] && (
            <div className="p-3 border-t border-gray-200">
              <CheckboxGroup
                category={key}
                options={options}
                selected={selectedFilters[key] || {}}
                onChange={handleCheckboxChange}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
