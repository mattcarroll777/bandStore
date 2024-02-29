export default function ShopBTN({ title, onClick }) {
  return (
    <div
      className="inline-block text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      onClick={onClick}
    >
      <h1>{title}</h1>
    </div>
  );
}
