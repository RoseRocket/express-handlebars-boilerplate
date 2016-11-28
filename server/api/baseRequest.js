import request from 'superagent';
import Promise from 'promise';
import { githubApi } from '../config/config.js';

const {
  urls,
  timeout,
  token
} = githubApi;

export function createRequest(options = {}) {
  const {
    url,
    body = {},
    method = 'get',
    query
  } = options;

  return new Promise((resolve, reject) => {
    request[method](urls.base + url)
      .timeout(timeout)
      .set('Accept', 'application/json')
      .set('Content-Type', 'application/json; charset=utf-8')
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
