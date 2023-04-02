import { storageTokens } from "../../constants";
import jsonParse from "./jsonParse";

type KeysTypes = keyof typeof storageTokens;

const manageStorage = () => {
  return {
    get(key: KeysTypes) {
      return localStorage.getItem(jsonParse(key));
    },
    set(key: KeysTypes, data: any, ignoreStringify?: boolean) {
      localStorage.setItem(key, ignoreStringify ? data : JSON.stringify(data));
      return manageStorage();
    },
    remove(key: KeysTypes){
      localStorage.removeItem(key);
      return manageStorage();
    }
  } 
}

export default manageStorage;