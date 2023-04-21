import { Footer } from '@/components/organisms/footer';
import { Header } from '@/components/organisms/header';
import 'styles/globals.css';

export const metadata = {
  title: 'Notion Concept Nextjs 13',
  description: 'Experimenting Nextjs 13 Routing API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
