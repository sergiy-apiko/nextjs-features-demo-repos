import { AuthCardWithForm } from '@/components/AuthCardWithForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Login or create an account to access all the features',
  alternates: {
    canonical: 'http://localhost:3001',
  },
};

const Auth = () => {
  return (
    <div className="flex w-full align-middle justify-center">
      <AuthCardWithForm />
    </div>
  );
};

export default Auth;
