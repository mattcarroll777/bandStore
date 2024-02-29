import { Inter } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/Navbar';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

const metadata = {
  title: 'Midnight Voltage',
  description: 'Fullstack Bandwebsite',
};

export default function RootLayout({ children }) {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen bg-black">
        <NavBar />
        <main className="flex-grow">{children}</main>
      </div>
    </>
  );
}
