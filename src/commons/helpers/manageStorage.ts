import { storageTokens } from "../../constants";

type KeysTypes = keyof typeof storageTokens;

const manageStorage = () => {
  return {
    get(key: KeysTypes) {
      return localStorage.getItem(key);
    },
    set(key: KeysTypes, data: any) {
      localStorage.setItem(key, JSON.stringify(data));
      return manageStorage();
    },
    remove(key: KeysTypes){
      localStorage.getItem(key);
      return manageStorage();
    }
  } 
}

export default manageStorage;