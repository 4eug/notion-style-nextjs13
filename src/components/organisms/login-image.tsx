/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

export default function LoginImage() {
  return (
    <div className="relative lg:flex items-end px-4 lg:pb-24 bg-[#F6F5F4] h-full sm:px-6 hidden">
      <div className="absolute mx-[98px] mb-[150px] items-center justify-center">
        <Image
          className="lg:w-[469px] w-[351px] lg:h-[444px] h-[444px]"
          alt=""
          src="/Bank.png"
          width="469"
          height="444"
        />
      </div>
      <div className="relative">
        <div className="w-full mx-[98px]">
          <h3 className="text-[16px] text-left">
            We're thrilled to have you here and can't wait for you to start
            bringing
            <br className="hidden xl:block" />
            your ideas to life with our powerful design and collaboration tools.
          </h3>
        </div>
      </div>
    </div>
  );
}
