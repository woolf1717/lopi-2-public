import './styles/admin-global.scss';

import { Lato } from 'next/font/google';
import NavBar from '../components/NavBar/NavBar';
import { UserBar } from '../components/UserBar/UserBar';

// import style from './layout.module.scss';

export const metadata = {
  title: 'Welcome to admin-panel',
  description: 'Generated by create-nx-workspace',
};

const lato = Lato({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl" className={`${lato.className}  h-100`}>
      <body className={` d-flex h-100`}>
        <NavBar />
        <main className="d-flex w-100 h-100 flex-column align-items-center">
          <UserBar />
          {children}
        </main>
      </body>
    </html>
  );
}
