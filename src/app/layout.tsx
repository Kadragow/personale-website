import PageLayout from '@/components/templates/PageLayout/PageLayout';
import '../styles/globals.scss';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Lorem',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, aliquam.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageLayout>{children}</PageLayout>
      </body>
    </html>
  );
}
