import { useState } from "react";
import { houseCardData } from "../data/cardData";
import HouseCard from "./HouseCard";
import ImageModal from "./ImageModal";

export default function HouseCardContainer() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const openModal = (images) => {
    setSelectedImages(images);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImages([]);
  };
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 ">
        {houseCardData.map((property) => (
          <HouseCard
            key={property.id}
            property={property}
            onClick={() => openModal(property.images)}
          />
        ))}
      </div>
      <ImageModal
        isOpen={modalOpen}
        images={selectedImages}
        onClose={closeModal}
      />
    </>
  );
}
