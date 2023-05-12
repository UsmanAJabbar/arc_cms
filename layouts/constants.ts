export const ROUTING: Route[] = [
  {
    name: 'Dashboard',
    path: '/',
  },
  {
    name: 'Posts',
    path: '/posts',
  },
  {
    name: 'Media/Gallery',
    path: '/gallery',
  },
  {
    name: 'Comments',
    path: '/comments',
  },
  {
    name: 'Settings',
    path: '/settings',
    subRoutes: [
      {
        name: 'User',
        path: '/user',
      },
      {
        name: 'Headers/Footers',
        path: '/headers-footers',
      },
      {
        name: 'Themes',
        path: '/themes',
      },
      {
        name: 'Plugins',
        path: '/plugins',
      },
      {
        name: 'Links',
        path: '/links',
      },
    ],
  },
];

export interface Route {
  name: string;
  path: string;
  subRoutes?: Route[];
}
