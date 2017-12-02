import { format } from 'util';
import { createRequest } from './baseRequest.js';
import { githubApi } from '../config/config.js';

const { urls } = githubApi;

export function getRepos(args) {
  const { username } = args;

  return createRequest({ url: format(urls.repos, username) });
}
