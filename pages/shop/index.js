import ShopList from '@/components/ShopList';

export default function Shop({ products }) {
  return (
    <div>
      <ShopList products={products} />
    </div>
  );
}

export async function getServerSideProps() {
  const baseUrl =
    // 'http://localhost:3000/' ||
    'https://band-store-next-git-main-mattcarroll777.vercel.app/';
  const res = await fetch(`${baseUrl}/api/shop`);
  const products = await res.json();

  return {
    props: {
      products,
    },
  };
}
