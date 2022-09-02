const publicLinks = {
  HOME: '/',
  LOGIN: '/login',
  UNAUTHORIZED: '/unauthorized',
  REGISTRATION: '/registration',
  PROFILE: '/profile',
  PASSWORDRESET: '/forgot-password'
};
const urls = {
  REGISTER: 'user/register/',
  LOGIN: '/user/login/',
  RESET: '/user/password-reset/',
  GET_PROFILE: '/user/login/',
  ARTICLES: '/articles/articles/'
};

const privateLinks = {
  ADMIN: '/admin',
  EDITOR: '/editor',
  EDITPROFILE: '/profile/edit'
};

export { publicLinks, privateLinks, urls };
