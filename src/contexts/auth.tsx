import React from "react";
import { useNavigate } from "react-router-dom";
import manageStorage from "../commons/helpers/manageStorage";
import { AuthContextType } from "../contexts/interfaces";
import { fakeAuthProvider } from "./helpers";

const AuthContext = React.createContext<AuthContextType>(null!);

export function useAuth() {
  return React.useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = React.useState<any>(manageStorage().get('STORAGE_USER_KEY'));

  const navigate = useNavigate();

  const token = fakeAuthProvider.isAuthenticated;

  const fetchUserData = (data: any) => {
    manageStorage().set('STORAGE_USER_KEY', data);
    setUser(data);
  }

  const signin = () => {
    return fakeAuthProvider.signin('d56as156das5d1as156=', () => {
      fetchUserData({
        id: "117156ff-6cde-48cd-bbc0-d1e1e24076db",
        name: "Fulano de tal",
        email: "nodetal@email.com",
        broker_id: "id-broker-user-lucas",
        role: "CUSTOMER",
        terms: true,
        products: [
          {
            id: "ABC123",
            name: "Fabrica de win",
            expiration: "2023-04-30T07:22:36.029Z"
          },
          {
            id: "ABC456",
            name: "Fabrica PRODUTO",
            expiration: "2023-03-03T07:22:36.029Z"
          }
        ],
        created_at: "2023-03-28T07:22:36.029Z"
      });
      navigate('/', { replace: true });
      navigate(0);
    });
  };

  const signout = () => {
    return fakeAuthProvider.signout(() => {
      setUser(null);
      manageStorage().remove('STORAGE_USER_KEY');
      navigate('/login', { replace: true });
    });
  };

  const value = { user, token, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
