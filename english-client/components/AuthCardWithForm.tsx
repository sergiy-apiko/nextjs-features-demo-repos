'use client';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginForm } from './forms/LoginForm';
import { RegisterForm } from './forms/RegisterForm';

type AuthCardProps = {
  isModal?: boolean;
};

export function AuthCardWithForm({ isModal = false }: AuthCardProps) {
  const [activeTab, setActiveTab] = useState('login');
  const onTabChange = (tab: string) => {
    setActiveTab(tab);
    // router.replace(pathname + '?action=' + tab);
  };

  return (
    <Tabs
      className="w-full px-10"
      onValueChange={onTabChange}
      value={activeTab}
    >
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="login">Login</TabsTrigger>
        <TabsTrigger value="register">Create account</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm isModal={isModal} />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm isModal={isModal} />
      </TabsContent>
    </Tabs>
  );
}
