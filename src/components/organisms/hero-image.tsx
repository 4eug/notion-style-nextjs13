/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';

export const HeroImage = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="mt-[44px]">
        <Image
          className="lg:w-[780px] w-[351px] lg:h-[227px] h-[95px]"
          alt=""
          src="/Images.png"
          width="780"
          height="277"
        />
      </div>
    </div>
  );
};
