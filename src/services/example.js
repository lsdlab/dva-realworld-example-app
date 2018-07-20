import request from '../utils/request';
import constructHeaders from '../utils/token.js';

export function query() {
  return request('/api/users');
}


const apiHost = 'https://conduit.productionready.io/api';


export async function authLogin(params) {
  return request(`${apiHost}/users/login`, {
    headers: constructHeaders
  })
}
