import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Container } from '@/components/molecules/container';
import { HomePage } from '@/components/templates/hero-section';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <section className="overflow-hidden">
        <Container className="pt-[9.4rem]">
          <HomePage />
        </Container>
      </section>
    </>
  );
}
