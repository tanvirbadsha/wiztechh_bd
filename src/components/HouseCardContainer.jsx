import { houseCardData } from "../data/cardData";
import HouseCard from "./HouseCard";

export default function HouseCardContainer() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
      {houseCardData.map((property) => (
        <HouseCard key={property.id} property={property} />
      ))}
    </div>
  );
}
