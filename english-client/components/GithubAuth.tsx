import { Button } from './ui/button';
import { AiFillGithub } from 'react-icons/ai';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GithubAuth() {
  const router = useRouter();
  const search = useSearchParams();

  const githubAuth = () => {
    if (process.env.NEXT_PUBLIC_SERVER_URL + '/auth/github') {
      router.push(
        process.env.NEXT_PUBLIC_SERVER_URL +
          '/auth/github' +
          '?redirect=' +
          search.get('referer'),
      );
    }
  };

  return (
    <Button variant="outline" className="w-full" onClick={githubAuth}>
      <span className="mr-2">
        {' '}
        <AiFillGithub fontSize={24} />
      </span>{' '}
      Github
    </Button>
  );
}
