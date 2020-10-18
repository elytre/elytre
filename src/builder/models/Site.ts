import { ArrayModel, ObjectModel } from 'objectmodel';

const MenuEntry = new ObjectModel({
  label: String,
  href: String,
});

const Site = new ObjectModel({
  title: String,
  menus: [
    {
      header: [ArrayModel([MenuEntry])],
      footer: [ArrayModel([MenuEntry])],
    },
  ],
});

export default Site;
