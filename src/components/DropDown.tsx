import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Menu2 } from 'tabler-icons-react';
import './styles.css';
import Link from 'next/link';

export function DropdownMenuDemo() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options" className="text-xl font-black">
          <Menu2 className="font-black" size={40} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={5}>
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="#o-que-e-a-blocok">Sobre</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="#produtos" className="hover:text-blue-300">
              Produtos
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="#obras" className="hover:text-blue-300">
              Obras
            </Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          {/* <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="#depoimentos" className="hover:text-blue-300">
              Depoimentos
            </Link>
          </DropdownMenu.Item> */}
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item className="DropdownMenuItem">
            <Link href="#seja-um-franqueado" className="hover:text-blue-300">
              Seja um franqueado!
            </Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
