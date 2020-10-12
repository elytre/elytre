import React from 'react';

import MenuEntry, { MenuEntryType } from './MenuEntry';

type MenuProps = {
  entries: MenuEntryType[];
};

export default function Menu({ entries }: MenuProps): React.ReactElement {
  return (
    <nav className="Menu">
      <ul className="Menu-entries">
        {entries.map((entry) => (
          <MenuEntry entry={entry} key={entry.label} />
        ))}
      </ul>
    </nav>
  );
}
