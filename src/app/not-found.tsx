import { Button } from '@/components/molecules/button';
import { Ico } from '@/components/molecules/Icons/ico';
import { FourofFour } from '@/components/templates/404';
import { Hero, HeroSubtitle, HeroTitle } from '@/components/molecules/hero';
import { HeroImage } from '@/components/organisms/hero-image';
import Image from 'next/image';

export default function NotFound() {
  return (
    <>
      <Hero>
        <FourofFour />
      </Hero>
    </>
  );
}
