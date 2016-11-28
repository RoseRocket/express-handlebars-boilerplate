// <----- SET YOUR SERVER PROPER SETTINGS IN THIS FILE

// server config
export const IP = 'localhost';
export const PORT = 3000;
export const TOKEN = {
  secret: 'SOME-KEY-HERE',
  headerName: 'token'
};
export const HTTP_CODES = {
  HTTP_SUCCESS: 200,
  HTTP_CLIENT_ERROR: 400,
  HTTP_INVALID_TOKEN: 401,
  HTTP_NOT_AUTHORIZED: 403,
  HTTP_NOT_FOUND: 404,
  HTTP_SERVER_ERROR: 500
};

// extra 3rd party configs
export const db = {
  user: 'USER',
  password: 'PASSWORD',
  server: 'MY_SERVER',
  database: 'MY_DATABASE'
};
export const githubApi = {
  authHeader: '',
  timeout: 6000,
  urls: {
    base: 'https://api.github.com/',
    repos: 'users/%s/repos'
  }
};
