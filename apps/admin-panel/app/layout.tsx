import './styles/admin-global.scss';
import { Providers } from '@lopi-2/common';

import { Lato } from 'next/font/google';

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
      <body className="d-flex h-100">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
