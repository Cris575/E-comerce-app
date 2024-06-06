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

async function updateUser(userId, formData) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS}/${userId}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    };
    const response = await authFech(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}
export const userCtrl = {
  getMe,
  update: updateUser,
};
