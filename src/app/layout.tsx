import PageLayout from '@/components/templates/PageLayout/PageLayout';
import '../styles/globals.scss';

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
      <PageLayout>{children}</PageLayout>
    </html>
  );
}
