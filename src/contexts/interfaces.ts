export interface AuthContextType {
  user: any;
  signin: () => void;
  signout: () => void;
}