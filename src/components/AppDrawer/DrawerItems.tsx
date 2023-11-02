import { ReactNode } from "react";
import Path from "route/Path";
import { GridIcon, PaperIcon } from "components/Icons";

export type DrawerChildItem = {
  label: string;
  path: string;
  matches?: Array<string>;
};

export type DrawerItem = {
  icon: ReactNode;
  label: string;
  path: string;
  children?: Array<DrawerChildItem>;
  matches?: Array<string>;
};

const DrawerItems: Array<DrawerItem> = [
  {
    icon: <GridIcon />,
    label: "sidebar.home",
    path: Path.home,
  },
  {
    icon: <PaperIcon />,
    label: "sidebar.sample",
    path: Path.listPageExample,
    children: [
      {
        label: "sidebar.listSample",
        path: Path.listPageExample,
        matches: [Path.userDetail(), Path.userDetailEdit()],
      },
    ],
  },
];

export default DrawerItems;
