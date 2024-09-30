import Link from 'next/link';

//components
import Nav from './Nav';
import { Button } from '../ui/button';
import MobileNav from './MobileNav';

export default function Header() {
  return (
    <header className='py-8 text-white xl:py-12'>
      <div className='container mx-auto flex items-center justify-between'>
        {/* Logo */}
        <Link href={'/'}>
          <h1 className='text-4xl font-semibold'>
            Luke <span className='text-accent'>.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className='hidden items-center gap-8 xl:flex'>
          <Nav />
          <Link href={'/contact'}>
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className='xl:hidden'>
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
