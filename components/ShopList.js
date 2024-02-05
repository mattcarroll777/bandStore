import ShopItem from './ShopItem';

const dummyData = [
  {
    id: 1,
    name: 'shirt',
    price: 1999,
    description: 'lorem lipsum product lorem lipsum',
  },
  {
    id: 2,
    name: 'long sleeve shirt',
    price: 2999,
    description: 'lorem lipsum product lorem lipsum',
  },
  {
    id: 3,
    name: 'sweatshirt',
    price: 4999,
    description: 'lorem lipsum product lorem lipsum',
  },
  {
    id: 4,
    name: 'tank top',
    price: 2250,
    description: 'lorem lipsum product lorem lipsum',
  },
  {
    id: 5,
    name: 'shirt',
    price: 2499,
    description: 'lorem lipsum product lorem lipsum',
  },
];

export default function ShopList() {
  return (
    <div className="mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-6"> Shop List </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {dummyData.map((product) => (
          <ShopItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
