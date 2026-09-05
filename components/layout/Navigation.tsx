'use client';

import DropdownMenu from './Dropdown';
import { navItems, NavItem } from './navData';

export default function Navigation() {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-inner">
        <ul className="nav navbar-nav navbar-right">
          {navItems.map((item: NavItem) => (
            <DropdownMenu key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
