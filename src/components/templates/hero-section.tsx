'use client';

import Image from 'next/image';
import { Dart } from '../molecules/Icons/dart';
import { Ico } from '../molecules/Icons/ico';
import { Button } from '../molecules/button';
import { Hero, HeroSubtitle, HeroTitle } from '../molecules/hero';
import { HeroImage } from '../organisms/hero-image';
import { Book } from '../molecules/Icons/book';
import { Sheet } from '../molecules/Icons/sheet';

export const HomePage = () => (
  <>
    <Hero>
      <Button
        className="gap-x-2 border-black border-[1px] rounded-full"
        href="/"
        variant="secondary"
      >
        <Ico />
        <span className="lg::text-[16px]">
          {' '}
          Get Notion Free | <span>Download</span>
        </span>
      </Button>
      <HeroTitle className="flex justify-center items-center lg:text-[72px] md:text-[48px] text-[32px]">
        <div className="flex gap-1">
          Your{' '}
          <span className="lg:mt-2">
            <Book />
          </span>{' '}
        </div>
        <div className="flex gap-1">
          wiki,
          <div className="flex">
            <span className="lg:mt-2">
              <Sheet />
            </span>{' '}
            docs,
          </div>
        </div>
      </HeroTitle>
      <HeroTitle className="flex justify-center items-center lg:text-[72px] md:text-[48px] text-[32px]">
        <div className="flex">
          &{' '}
          <span className="lg:mt-2">
            <Dart />
          </span>{' '}
          projects.
          <div className="flex">Together.</div>
        </div>
      </HeroTitle>
      <HeroSubtitle className="text-[24px]">
        Notion is the connected workspace where
        <br className="hidden md:block" /> better, faster work happens.
      </HeroSubtitle>
      <Button className="bg-black text-white" size="lg" href="/">
        <span className="">Get Started </span>
      </Button>
      <HeroImage />
    </Hero>
  </>
);
