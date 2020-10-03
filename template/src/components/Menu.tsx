import React from 'react';
import { NavLink } from 'react-router-dom';

type MenuEntry = {
  label: string;
  href: string;
};

type MenuProps = {
  entries: MenuEntry[];
};

export default function Menu({ entries }: MenuProps): React.ReactElement {
  return (
    <nav className="Menu">
      <ul className="Menu-entries">
        {entries.map((entry) => (
          <li key={entry.label} className="Menu-entry">
            <NavLink to={entry.href}>{entry.label}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
