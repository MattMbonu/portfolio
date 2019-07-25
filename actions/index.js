import axios from "axios";
import Cookies from "js-cookie";
import { getCookieFromReq } from "../helpers/utils";

const setAuthToken = req => {
  const token = req ? getCookieFromReq(req, "jwt") : Cookies.getJSON("jwt");
  if (token) {
    return {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
  } else return undefined;
};

export const getSecretData = async req => {
  const url = req ? "https://localhost:3000/api/v1/secret" : "/api/v1/secret";
  return await axios.get(url, setAuthToken(req)).then(res => res.data);
};
