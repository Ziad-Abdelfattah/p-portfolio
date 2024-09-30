'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

//components
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet';
import { CiMenuFries } from 'react-icons/ci';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export default function MobileNav() {
  const pathname = usePathname();
  return (
    <Sheet>
      <SheetTrigger className='flex items-center justify-center'>
        <CiMenuFries className='text-[32px] text-accent' />
      </SheetTrigger>
      <SheetContent className='flex flex-col'>
        {/* Logo */}
        <div className='mb-40 mt-32 text-center text-2xl'>
          <Link href={`/`}>
            <h1 className='text-4xl font-semibold'>
              Luke<span className='text-accent'>.</span>
            </h1>
          </Link>
        </div>
        {/* Nav */}
        <nav className='flex flex-col items-center justify-center gap-8'>
          {links.map((link) => (
            <Link
              key={link.name}
              className={`${link.path === pathname && 'border-b-2 border-accent text-accent'} text-xl capitalize transition-all hover:text-accent`}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
}
