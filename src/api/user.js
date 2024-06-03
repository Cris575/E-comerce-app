import { ENV } from "../utils";

async function getMe() {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.USERS_ME}`;
    const params = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzE3Mzc2MzQyLCJleHAiOjE3MTk5NjgzNDJ9.GzFgEYd4x3yjkvMqcbqsz8podPAOI7AEyoywIUtJRCU",
      },
    };

    const response = await fetch(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const userCtrl = {
  getMe,
};
