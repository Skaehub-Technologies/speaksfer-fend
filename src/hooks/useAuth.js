import { useContext } from 'react';
import AuthContext from '../constants/AuthProvider';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
