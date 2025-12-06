import { useState } from "react";

export default function ImageModal({ isOpen, images, onClose }) {
  const [activeIndex, setActiveIndex] = useState(0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 ">
      {/* Modal */}
      <div className="relative bg-white rounded-[30px] p-4 md:p-6 w-full max-w-[90vw] md:max-w-4xl lg:max-w-5xl md:h-[80vh]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-3 -right-3 bg-white rounded-full shadow text-gray-600 hover:text-gray-800 w-[35px] h-[35px] cursor-pointer"
        >
          ✕
        </button>

        {/* Main image container */}
        <div className="w-full md:h-[50vh] rounded-2xl overflow-hidden shadow-sm">
          <img
            src={images[activeIndex]}
            alt="Preview"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Thumbnail strip */}
        <div className="flex gap-4 mt-6 justify-center overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setActiveIndex(idx)}
              className={`border-4 rounded-xl overflow-hidden w-28 h-20 transition-all ${
                activeIndex === idx
                  ? "border-purple-400"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={img} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
