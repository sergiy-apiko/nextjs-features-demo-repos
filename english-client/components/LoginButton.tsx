import useCurrentUser from '@/hooks/useCurrentUser';
import { Label } from '@radix-ui/react-label';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from './ui/button';

export default function LoginButton() {
  const [loading, user, logOut] = useCurrentUser();

  const router = useRouter();
  const pathname = usePathname();

  const goToAuth = () => {
    if (pathname !== '/auth') {
      const qs = new URLSearchParams({ referer: pathname });
      router.push('/auth?' + qs);
    }
  };

  if (loading) {
    return <Label>Loading ...</Label>;
  }

  if (!!user) {
    if (pathname === '/auth') {
      router.push('/');
      return null;
    }
    return (
      <div>
        <Label className="text-sm">
          Hi, {user.firstName} {user.lastName}{' '}
        </Label>
        {'  '}
        <Button
          variant={'outline'}
          size="sm"
          className="text-sm ml-2"
          onClick={logOut}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <Button onClick={goToAuth} variant="ghost">
      <Label className="cursor-pointer"> Login / Register</Label>
    </Button>
  );
}
