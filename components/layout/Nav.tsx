'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/services' },
  { name: 'Resume', path: '/resume' },
  { name: 'Work', path: '/work' },
  { name: 'Contact', path: '/contact' },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className='flex gap-8'>
      {links.map((link) => (
        <Link
          href={link.path}
          key={link.name}
          className={`${link.path === pathname && 'border-b-2 border-accent text-accent'} font-medium capitalize transition-all hover:text-accent`}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
}
