import useAuth from './useAuth';
import axios from '../api/axios';
import LocalStorageService from '../utils/local_storage';
import jwtDecode from '../utils/jwt_decode';

const useRefreshToken = () => {
  const { setAuth } = useAuth();
  const refresh = async () => {
    const response = await axios.post('/user/token/refresh/', {
      refresh: LocalStorageService.getRefreshToken()
    });
    LocalStorageService.setToken(response.data);
    setAuth((prev) => {
      return {
        ...prev,
        user_id: jwtDecode(response.data.access),
        access: response.data.access
      };
    });
    return response.data.access;
  };
  return refresh;
};

export default useRefreshToken;
