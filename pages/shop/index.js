import ShopBTN from '@/components/ShopBTN';
import ShopList from '@/components/ShopList';
//flex flex-col sm:flex-row justify-between items-center w-full p-4
export default function Shop() {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-10">Shop</h1>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full p-4">
        <ShopBTN title={'Clothing'} />
        <ShopBTN title={'Vinyl'} />
        <ShopBTN title={'Misc'} />
      </div>
      <div>
        <ShopList />
      </div>
    </div>
  );
}
