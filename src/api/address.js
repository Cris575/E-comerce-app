import { authFech } from "../lib";
import { ENV } from "../utils";

async function getAllAddresses(userId) {
  try {
    const filters = `filters[user][id][$eq]=${userId}`;
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}?${filters}`;

    const response = await authFech(url);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function createAddress(userId, data) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          ...data,
          user: userId,
        },
      }),
    };

    const response = await authFech(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function getAddresById(addressId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}/${addressId}`;
    const response = await authFech(url);

    if (response.status !== 200) throw response;

    const result = await response.json();

    return { ...result.data.attributes, id: result.data.id };
  } catch (error) {
    throw error;
  }
}

async function updateAddres(addressId, data) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}/${addressId}`;
    const params = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data,
      }),
    };

    const response = await authFech(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

async function deleteAdress(addressId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.ADDRESSES}/${addressId}`;
    const params = {
      method: "DELETE",
    };

    const response = await authFech(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {}
}
export const addressCtrl = {
  getAll: getAllAddresses,
  get: getAddresById,
  create: createAddress,
  update: updateAddres,
  delete: deleteAdress,
};
