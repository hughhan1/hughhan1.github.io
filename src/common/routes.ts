interface RoutesMapType {
  [key: string]: string;
}

export const Pages = ['home', 'about', 'blog', 'contact'];

export const RoutesMap: RoutesMapType = {
  home: '/',
  about: '/about/',
  blog: '/blog/',
  contact: '/contact/',
};

export const BlogRoutesMap: RoutesMapType = {
  'working-at-mongodb': '/notes/working-at-mongodb',
  'the-great-ocean-road': '/notes/the-great-ocean-road',
};
