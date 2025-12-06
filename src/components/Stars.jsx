export default function Stars({ count }) {
  const totalStars = 5;
  const starArray = Array.from({ length: totalStars }, (_, i) => i + 1);

  return (
    <div className="flex gap-1">
      {starArray.map((starNumber) => {
        const isFilled = starNumber <= count;
        const starSrc = isFilled
          ? "/assets/customer_review/star_fill.png"
          : "/assets/customer_review/star.png";
        return (
          <img
            key={starNumber}
            src={starSrc}
            alt={isFilled ? "filled star" : "empty star"}
          />
        );
      })}
    </div>
  );
}
