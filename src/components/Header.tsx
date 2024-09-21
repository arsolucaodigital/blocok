'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import {
  BrandInstagram,
  BrandFacebook,
  BrandWhatsapp,
} from 'tabler-icons-react';
import { Logo } from './Logo';
import { DropdownMenuDemo } from './DropDown';

export function Header() {
  //efeito topo
  const [goingDown, setGoingDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 10) {
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
      <div className="bg-black h-8">
        <div className="container px-4 mx-auto flex items-center justify-end h-full">
          <Link
            href="mailto:franquiablocok@gmail.com"
            className="text-white text-sm hover:text-blue-100 hidden lg:flex"
          >
            franquiablocok@gmail.com
          </Link>
          <div className="text-white text-sm mx-3 hidden lg:flex"> - </div>
          <Link href="" className="text-white text-sm hover:text-blue-100">
            (22)99999-9999
          </Link>
          <div className="text-white text-sm mx-3"> | </div>
          <ul className="flex gap-2 items-center">
            <li>
              <Link
                href=""
                className="text-white font-extralight hover:text-blue-100"
              >
                <BrandInstagram size={22} />
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-white font-extralight hover:text-blue-100"
              >
                <BrandFacebook size={20} />
              </Link>
            </li>
            <li>
              <Link
                href=""
                className="text-white font-extralight hover:text-blue-100"
              >
                <BrandWhatsapp size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
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
            <Link href="/produtos" className="hover:text-blue-300">
              Produtos
            </Link>
          </li>
          <li>
            <Link href="/obras" className="hover:text-blue-300">
              Obras
            </Link>
          </li>
          <li>
            <Link href="/depoimentos" className="hover:text-blue-300">
              Depoimentos
            </Link>
          </li>
          <li>
            <Link href="/seja-um-franqueado" className="hover:text-blue-300">
              Seja um franqueado!
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
