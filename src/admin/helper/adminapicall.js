import { API } from "../../backend";

export const createCategory = (token, category) => {
  return fetch(`${API}/category/create`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(category),
  }).then((response) => {
  return  response.json();
  }).catch(err=>err.json());
};
