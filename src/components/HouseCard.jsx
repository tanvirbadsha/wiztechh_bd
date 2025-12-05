import { Bath, Bed, MoveUpLeft } from "lucide-react";

export default function HouseCard({ property }) {
  return (
    <div className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      <img
        src={property.image_url}
        alt={property.title}
        className="w-full h-auto object-cover"
      />
      <div className="p-4 pl-0 flex flex-col gap-2">
        <div className="flex items-center gap-4  text-gray-600 mb-2 pl-2">
          <div className="flex items-center gap-1">
            <Bed className="h-4 w-4" />
            <span>Bed- 0{property.details.bedrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="h-4 w-4" />
            <span>Bathroom- 0{property.details.bathrooms}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="border-2 border-zinc-900 border-dashed">
              <MoveUpLeft className="h-4 w-4 text-zinc-900" />
            </div>
            <span>{property.details.area_sqft} sqft</span>
          </div>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">
          {property.title}
        </h3>

        <div className="flex items-center gap-3">
          <div className="text-xl font-bold text-gray-900">
            ${property.price.amount}
            <span className="text-sm font-normal text-gray-600">
              /{property.price.period} .
            </span>
          </div>
          <p className="text-gray-600 mt-1">{property.location}</p>
        </div>
      </div>
    </div>
  );
}
