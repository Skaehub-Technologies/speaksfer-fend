/* eslint-disable no-return-await */
/* eslint-disable import/prefer-default-export */
export class API {
  static async loginUser(body) {
    const resp = await fetch(`http://127.0.0.1:8000/api/user/login/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await resp.json();
  }

  static async registerUser(body) {
    const resp = await fetch(`http://127.0.0.1:8000/api/users/register/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    return await resp.json();
  }
}
