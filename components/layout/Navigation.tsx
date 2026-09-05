'use client';

import DropdownMenu from './Dropdown';
import { navigation } from './navData';

export default function Navigation() {
  return (
    <nav className="navbar navbar-default">
      <div className="navbar-inner">
        <ul className="nav navbar-nav navbar-right">
          {navigation.map((item) => (
            <DropdownMenu key={item.label} item={item} />
          ))}
        </ul>
      </div>
    </nav>
  );
}
