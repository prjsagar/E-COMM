import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import localFont from 'next/font/local';
import { Inter, Montserrat } from 'next/font/google';

// const font = localFont({
//   src: [
//     {
//       path: './fonts/Montserrat-Black.ttf',
//     },
//     {
//       path: './fonts/Montserrat-Bold.ttf',
//     },
//     {
//       path: './fonts/Montserrat-Light.ttf',
//     },
//     {
//       path: './fonts/Montserrat-Medium.ttf',
//     },
//     {
//       path: './fonts/Montserrat-Regular.ttf',
//     },
//     {
//       path: './fonts/Montserrat-SemiBold.ttf',
//     },
//     {
//       path: './fonts/Montserrat-Thin.ttf',
//     },
//     {
//       path: './fonts/Montserrat-ExtraBold.ttf',
//     },
//   ],
//   variable: '--font-montserrat',
// });

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Ecommerce',
  description: 'Developed By Sagar',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="{montserrat.className}">
      <body className="bg-white font-montserrat">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
