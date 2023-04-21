/* eslint-disable @next/next/no-img-element */
'use client';
import Image from 'next/image';
import { Button } from '../molecules/button';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export const FourofFour = () => {
  // const router = useRouter();

  // useEffect(() => {
  //   setTimeout(() => {
  //     router.push('/');
  //   }, 4000);
  // }, [router]);

  return (
    <>
      <div className="flex items-center justify-center">
        <div className="mt-[198px]">
          <Image
            className="lg:w-[650px] w-[372px] lg:h-[403px] h-[231px]"
            alt=""
            src="/404.png"
            width="650"
            height="403"
          />
        </div>
      </div>
      <Button className="mt-[40px]" size="sm" variant="outline" href="/">
        <span className="">Go Back </span>
      </Button>
    </>
  );
};
