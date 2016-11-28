import { HTTP_CODES } from '../config/config.js';
const { HTTP_SERVER_ERROR } = HTTP_CODES;

export default function(err, req, res) {
  res.sendStatus(HTTP_SERVER_ERROR);
}
