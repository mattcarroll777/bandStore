export default function SIPrice({ price }) {
  const formattedPrice = (price / 100).toFixed(2);
  return (
    <h1 className="text-white text-center font-semibold">{formattedPrice}</h1>
  );
}
