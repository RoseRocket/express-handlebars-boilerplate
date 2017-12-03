/* eslint no-console:0 */

export default function(err, req, res, next) {
  let { method } = req;

  const { url, body } = req;

  method = method.toUpperCase();

  console.error(`API fail -> ${method} ${url}`);
  if (method === 'POST' || method === 'PUT') {
    console.error(`body is -> ${JSON.stringify(body)}`);
  }

  if (err.stack) {
    console.error(err.stack);
  } else if (err.message) {
    console.error(err.message);
  } else {
    console.error(err);
  }

  next(err);
}
