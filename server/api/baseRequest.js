import request from 'superagent';
import Promise from 'promise';
import { githubApi } from '../config/config.js';

const { urls, timeout, authHeader } = githubApi;

export function createRequest(options = {}) {
  const {
    url,
    data,
    method = 'get',
    token = ''
  } = options;

  const requestType = method.toLowerCase();

  // If request is GET then use query. For POST/PUT methods use body. For DELETE neither
  let body;
  let query;
  if (requestType === 'get') {
    query = data;
  } else if (['post', 'put'].includes(requestType)) {
    body = data;
  }

  return new Promise((resolve, reject) => {
    request[method](urls.base + url)
      .timeout(timeout)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8')
      .set(authHeader || 'auth', token)
      .send(body)
      .query(query)
      .end((error, response = {}) => {
        if (error) {
          reject(error);
        }

        resolve(response.body);
      });
  });
}
