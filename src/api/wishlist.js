import { size } from "lodash";
import { authFech } from "../lib";
import { ENV } from "../utils";

async function addWishlist(userId, productId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`;
    console.log(url);
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          user: userId,
          product: productId,
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

async function checkWishlist(userId, productId) {
  console.log(userId, productId);
  try {
    const filterUser = `filters[user][id][$eq][0]=${userId}`;
    const filterProduct = `filters[product][id][$eq][1]=${productId}`;
    const filters = `${filterUser}&${filterProduct}`;

    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}?${filters}`;

    const response = await authFech(url);

    if (response.status !== 200) throw response;
    const result = await response.json();

    if (size(result.data) === 0) {
      return false;
    }
    return true;
  } catch (error) {
    throw error;
  }
}

export const wishlistCtrl = {
  add: addWishlist,
  check: checkWishlist,
};
