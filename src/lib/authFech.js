import { storageCtrl } from "../api/storage";
import { fn } from "../utils";

export async function authFech(url, params) {
  const token = await storageCtrl.getToken();

  const logout = async () => {
    await storageCtrl.removeToken();
  };

  if (!token) {
    logout();
  } else {
    if (fn.hasTokenExpired(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        throw error;
      }
    }
  }
}
