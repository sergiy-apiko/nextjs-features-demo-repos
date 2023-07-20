import AuthModal from '@/components/AuthModal';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Authentication',
  description: 'Login or create an account to access all the features',
  alternates: {
    canonical: 'http://localhost:3001',
  },
};

export default function AuthModalPage() {
  return <AuthModal />;
}
