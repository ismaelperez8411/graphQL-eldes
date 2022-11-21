import { eldes_PROD_URL } from "../origins-url.js";
import fetch from "node-fetch";
export function fetchUserToken({ userName = "", password = "" }) {
  return fetch(`${eldes_PROD_URL}/identity/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userName, password }),
  }).then((res) => res.json());
}
