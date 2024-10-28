import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = (name: string, value: string, options?: any) => {
  cookies.set(name, value, { path: '/', ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};
