'use client';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import LoginButton from './LoginButton';
import { Label } from './ui/label';

export default function AppNavigation() {
  const pathname = usePathname();
  return (
    <div className=" border-b-[1px]">
      <NavigationMenu className="p-4 flex container max-w-screen-xl  justify-normal pb-2 pt-2">
        <ul className="flex flex-grow-1  w-full  justify-between">
          <div className="flex">
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/blog" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Blog
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </div>
          <NavigationMenuItem className="flex items-center">
            <LoginButton />
          </NavigationMenuItem>
        </ul>
      </NavigationMenu>
    </div>
  );
}
