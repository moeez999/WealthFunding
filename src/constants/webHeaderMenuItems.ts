interface MenuItem {
  id: number;
  path: string;
  name: string;
}

export const webHeaderMenuItems: MenuItem[] = [
  {
    id: 1,
    path: "/web",
    name: "Home",
  },
  {
    id: 2,
    path: "/web/legal",
    name: "Legal",
  },
  {
    id: 3,
    path: "/web/cookie-policy",
    name: "Cookie Policy",
  },
  {
    id: 4,
    path: "/web/privacy-policy",
    name: "Privacy Policy",
  },
  {
    id: 5,
    path: "/web/terms-and-conditions",
    name: "Terms & Conditions",
  },
  {
    id: 6,
    path: "/web/disclaimer",
    name: "Disclaimer",
  },
  {
    id: 7,
    path: "/web/return-policy",
    name: "Return Policy",
  },
];