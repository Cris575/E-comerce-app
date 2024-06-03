import { ENV } from "../utils";
import { authFech } from "../lib";

async function getMe() {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;

    const response = await authFech(url);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const userCtrl = {
  getMe,
};
