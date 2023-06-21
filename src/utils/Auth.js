export const base__Url = "https://auth.nomoreparties.co";

export function register(email, password) {
  return fetch(`${base__Url}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ password, email }),
  })
    .then((reponse) => {
      return reponse.json();
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
}

export function authorize(email, password) {
  return fetch(`${base__Url}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((reponse) => reponse.json())
    .catch((err) => console.log(err));
}

export function checkToken(token) {
  return fetch(`${base__Url}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}
