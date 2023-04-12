import './globals.css';
import Header from './components/Header';

export const metadata = {
  title: 'Tahenti Media',
  description: 'Web development tutorials and courses',
  keywords: 'web development, web design, javascript, react, node, html, css',
};

export default function RootLayout({ children }) {
  return (
    <html lang='fr'>
      <body className='bg-[#333] m-0 p-0 text-white font-montserrat'>
        <Header />
        <main className='container'>{children}</main>
      </body>
    </html>
  );
}
