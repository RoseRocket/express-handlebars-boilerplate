import { createRequest } from './baseRequest.js';
import { githubApi } from '../config/config.js';
import { format } from 'util';
const { urls } = githubApi;

export function getRepos(args) {
  const { username } = args;

  return createRequest({ url: format(urls.repos, username) });
}
