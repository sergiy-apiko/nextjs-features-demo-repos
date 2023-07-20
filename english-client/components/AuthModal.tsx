'use client';

import { AuthCardWithForm } from '@/components/AuthCardWithForm';
import { useRouter, useSelectedLayoutSegments } from 'next/navigation';
import React from 'react';

import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';

function AuthModal() {
  const router = useRouter();

  const onToggleChange = (v: boolean) => {
    if (!v) {
      router.back();
    }
  };

  return (
    <Dialog open={true} onOpenChange={onToggleChange}>
      <DialogContent className="sm:max-w-[600px]">
        <div className="flex w-full align-middle justify-center">
          <AuthCardWithForm isModal />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default AuthModal;
