'use client';

import { useState } from 'react';
import Link from 'next/link';

type MenuItem = {
  label: string;
  href?: string;
  children?: MenuItem[];
};

type DropdownMenuProps = {
  item: MenuItem;
};

export default function DropdownMenu({ item }: DropdownMenuProps) {
  const [open, setOpen] = useState(false);

  const hasChildren = item.children && item.children.length > 0;

  return (
    <li className={hasChildren ? 'dropdown dropdown-hover' : ''}>
      <div className="flex items-center">
        <Link href={item.href || '#'}>{item.label}</Link>

        {hasChildren && (
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            className="ml-2"
          >
            <span className="caret-2">⌄</span>
          </button>
        )}
      </div>

      {hasChildren && open && (
        <ul className="dropdown-menu">
          {item.children!.map((child) => (
            <DropdownMenu key={child.label} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
}
