import { Button } from './ui/button';
import { FcGoogle } from 'react-icons/fc';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

export default function GoogleAuth() {
  const router = useRouter();
  const pathname = usePathname();
  const search = useSearchParams();

  const googleAuth = () => {
    if (process.env.NEXT_PUBLIC_GOOGLE_AUTH_ROUTE) {
      router.push(
        process.env.NEXT_PUBLIC_GOOGLE_AUTH_ROUTE +
          '?redirect=' +
          search.get('referer'),
      );
    }
  };

  return (
    <Button variant="outline" className="w-full" onClick={googleAuth}>
      <span className="mr-2">
        {' '}
        <FcGoogle fontSize={24} />
      </span>{' '}
      Google
    </Button>
  );
}
