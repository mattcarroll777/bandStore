import React, { useState } from 'react';
import ShopItem from './ShopItem';
import ShopBTN from './ShopBTN';

export default function ShopList({ products }) {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-10">Shop</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4">
        <ShopBTN
          title={'Clothing'}
          onClick={() => setSelectedCategory('clothing')}
        />
        <ShopBTN title={'Vinyl'} onClick={() => setSelectedCategory('vinyl')} />
        <ShopBTN title={'Misc'} onClick={() => setSelectedCategory('misc')} />
        <ShopBTN title={'All'} onClick={() => setSelectedCategory('all')} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {products
          .filter(
            (product) =>
              selectedCategory === 'all' ||
              (product.type ? product.type === selectedCategory : false)
          )
          .map((product) => (
            <ShopItem key={product._id.toString()} product={product} />
          ))}
      </div>
    </div>
  );
}
