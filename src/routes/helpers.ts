import manageStorage from "../commons/helpers/manageStorage";

export const needRedirect = {
  auth: manageStorage().get('STORAGE_TOKEN_KEY') ? "" : "/login",
  unAuth: manageStorage().get('STORAGE_TOKEN_KEY') ? "/" : ""
}