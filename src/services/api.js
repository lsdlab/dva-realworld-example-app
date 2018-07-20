import request from '../utils/request';

const apiHost = 'https://conduit.productionready.io/api';

function constructHeaders() {
  const token = localStorage.getItem('token');
  if (token) {
    return {
      'Authorization': `Token ${token}`,
      'Content-Type': 'application/json',
    } ;
  } else {
    return {}
  }
}


export async function authLogin(params) {
  return request(`${apiHost}/users/login`, {
    headers: constructHeaders(),
    method: 'POST',
    body: params,
  });
}

export async function authRegister(params) {
  return request(`${apiHost}/users/`, {
    method: 'POST',
    body: params,
  });
}

export async function authCurrentUser() {
  return request(`${apiHost}/user/`, {
    headers: constructHeaders(),
    method: 'GET',
  });
}

export async function authUpdateUser(params) {
  return request(`${apiHost}/user/`, {
    headers: constructHeaders(),
    method: 'PUT',
    body: params,
  });
}

export async function profileGet(username) {
  return request(`${apiHost}/profiles/${username}/`, {
    headers: constructHeaders(),
    method: 'GET',
  });
}

export async function profileFollow(username) {
  return request(`${apiHost}/profiles/${username}/follow/`, {
    headers: constructHeaders(),
    method: 'POST',
  });
}

export async function profileUnfollow(username) {
  return request(`${apiHost}/profiles/${username}/follow/`, {
    headers: constructHeaders(),
    method: 'DELETE',
  });
}

export async function listTags() {
  return request(`${apiHost}/tags/`, {
    headers: constructHeaders(),
    method: 'GET',
  });
}

export async function queryArticles(params) {
  return request(`${apiHost}/articles/?${stringify(params)}`, {
    headers: constructHeaders(),
    method: 'GET',
  });
}

