'use client';

import { useEffect, useState } from 'react';
import cookie from 'js-cookie';
import { useQuery, useQueryClient } from 'react-query';
import UserApi from '@/api/auth';

export type Tokens = {
  refresh_token: string;
  access_token: string;
};
export interface UserType {
  firstName: string;
  lastName: string;
  email: string;
}
export default function useCurrentUser(): [
  boolean,
  UserType | null | undefined,
  () => void,
] {
  const { data: user, isLoading } = useQuery({
    queryKey: 'me',
    queryFn: () => UserApi.getUser(),
  });
  const queryClient = useQueryClient();

  const logOut = async () => {
    try {
      await UserApi.logOut(() => {
        queryClient.invalidateQueries(['me']);
      });
    } catch (err) {
      console.error(err);
    }
  };

  return [isLoading, user, logOut];
}
