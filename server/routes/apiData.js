import * as githubApi from '../api/githubApi.js';

const API_DATA_VIEW = 'apiData';

export function repos(req, res, next) {
  const { username } = req.params;

  const context = {
    layoutData: {
      title: 'API request example',
      meta: {
        author: 'Alexey Novak',
        description: '',
        keywords: '',
        robots: '',
      },
    },
    githubAuthor: username,
  };

  githubApi
    .getRepos({ username })
    .then(repos => res.render(API_DATA_VIEW, { ...context, repos }))
    .catch(next);
}
