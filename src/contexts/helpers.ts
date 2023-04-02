import manageStorage from "../commons/helpers/manageStorage";

export const fakeAuthProvider = {
  isAuthenticated: manageStorage().get('STORAGE_TOKEN_KEY'),
  signin(token: string, callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = token;
    manageStorage().set('STORAGE_TOKEN_KEY', token, true);
    setTimeout(callback, 100);
  },
  signout(callback: VoidFunction) {
    fakeAuthProvider.isAuthenticated = '';
    manageStorage().remove('STORAGE_TOKEN_KEY');
    setTimeout(callback, 100);
  },
};