'use client';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Menu2 } from 'tabler-icons-react';
import './styles.css';
import Link from 'next/link';
import { useState } from 'react';

export function DropdownMenuDemo() {
  const [open, setOpen] = useState(false);

  const handleItemClick = () => {
    setOpen(false); // Fecha o dropdown ao clicar em um item
  };

  return (
    <DropdownMenu.Root open={open} onOpenChange={setOpen}>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Customise options" className="text-xl font-black">
          <Menu2 className="font-black" size={40} />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className="DropdownMenuContent">
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={handleItemClick}
          >
            <Link href="/sobre">Sobre</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={handleItemClick}
          >
            <Link href="/#beneficios">Principais Benefícios</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={handleItemClick}
          >
            <Link href="/#obras">Obras</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className="DropdownMenuSeparator" />
          <DropdownMenu.Item
            className="DropdownMenuItem"
            onClick={handleItemClick}
          >
            <Link href="/#seja-um-franqueado">Seja um franqueado!</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}
