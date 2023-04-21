/* eslint-disable @next/next/no-img-element */
import Form from '@/components/organisms/form';
import LoginImage from '@/components/organisms/login-image';
import React from 'react';

export default function LoginPage() {
  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <LoginImage />
        <Form />
      </div>
    </section>
  );
}
