import SIName from './ShopItems/SIName';
import SIPrice from './ShopItems/SIPrice';

export default function ShopItem({ product }) {
  return (
    <div className="border border-gray-200 rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <h1 className="text-xl font-bold text-center p-4">Shop Item</h1>

      <div className="bg-gray-100 p-4 flex justify-center items-center">
        <span>Item Image</span>
      </div>
      <div className="p-4">
        <SIName name={product.name} />
        <SIPrice price={product.price} />
      </div>
    </div>
  );
}
