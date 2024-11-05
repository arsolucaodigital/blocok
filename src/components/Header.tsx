'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { BrandInstagram, BrandFacebook } from 'tabler-icons-react';
import { Logo } from './Logo';
import { DropdownMenuDemo } from './DropDown';

export function Header() {
  //efeito topo
  const [goingDown, setGoingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setGoingDown(true);
      } else {
        setGoingDown(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [goingDown]);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div
        className={`bg-black transition-all overflow-hidden duration-300 ${goingDown ? 'h-0' : 'h-8'}`}
      >
        <div className="container px-4 mx-auto flex items-center justify-end h-full">
          <Link
            href="mailto:franquiablocok@gmail.com"
            className="text-white text-sm hover:text-blue-300 flex"
          >
            franquiablocok@gmail.com
          </Link>
          <div className="text-white text-sm mx-3"> | </div>
          <ul className="flex gap-2 items-center">
            <li>
              <Link
                href="https://www.instagram.com/franquiablocok/"
                className="text-white font-extralight hover:text-blue-300"
                target="_blank"
              >
                <BrandInstagram size={22} />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.facebook.com/franquiablocok"
                className="text-white font-extralight hover:text-blue-300"
                target="_blank"
              >
                <BrandFacebook size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div
        className={`container mx-auto px-4 transition-all duration-300 flex justify-between items-center ${goingDown ? 'py-1' : 'py-3'}`}
      >
        <Logo />
        <div className="flex lg:hidden">
          <DropdownMenuDemo />
        </div>
        <ul className="hidden gap-4 text-black uppercase text-sm font-bold lg:flex">
          <li>
            <Link href="/sobre" className="hover:text-blue-300">
              Sobre
            </Link>
          </li>
          <li>
            <Link href="/#beneficios" className="hover:text-blue-300">
              Principais Benefícios
            </Link>
          </li>
          <li>
            <Link href="/#obras" className="hover:text-blue-300">
              Obras
            </Link>
          </li>
          <li>
            <Link href="/#seja-um-franqueado" className="hover:text-blue-300">
              Seja um franqueado!
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
