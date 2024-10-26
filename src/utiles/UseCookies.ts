import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const setCookie = (name: string, value: string, option: any) => {
  return cookies.set(name, value, { ...option });
};

export const resetCookie = (name: string) => {
  // 쿠키를 삭제하기 위해 만료 시간을 과거로 설정
  setCookie(name, '', {
    expires: new Date(0),
    domain: '.naoman.site',
    path: '/',
  });
};
