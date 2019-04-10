interface RoutesType {
  [key: string]: string;
}

export const Pages = ['home', 'about', 'blog', 'contact'];

export const Routes: RoutesType = {
  home: '/',
  about: '/about/',
  blog: '/blog/',
  contact: '/contact/',
};
