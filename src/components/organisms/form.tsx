/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Button } from '../molecules/button';
import { Ico } from '../molecules/Icons/ico';
import { Github } from '../molecules/Icons/github';
import { Google } from '../molecules/Icons/google';

export default function Form() {
  return (
    <section className="flex my-[258px] items-center justify-center ">
      <div className="max-w-sm  ">
        <h2 className="text-[36px] font-bold leading-tight text-black text-center">
          Log in
        </h2>
        <p className="mt-2 text-[16px] text-center">
          Log in with your Credentials
        </p>

        <div className="mt-3 space-y-3 items-center mx-[12px] ">
          <Button
            className="gap-x-2 border-[#D3D3D3] border-[1px]"
            href="/"
            variant="secondary"
            size="xl"
          >
            <Google />
            <span className="lg::text-[20px]">Sign in with Google</span>
          </Button>

          <Button
            className="gap-x-2 border-[#D3D3D3] border-[1px]"
            href="/"
            variant="secondary"
            size="xl"
          >
            <Github />
            <span className="lg::text-[20px]">Sign in with Github</span>
          </Button>
        </div>

        <p className="mt-5 text-[10px] text-center items-center justify-center">
          By clicking “Continue with Apple/Google/Email/SAML” above, you
          acknowledge that you have read and understood, and agree to Notion's
          Terms & Conditions and Privacy Policy.
        </p>
      </div>
    </section>
  );
}
