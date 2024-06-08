import { size } from "lodash";
import { authFetch } from "../lib";
import { ENV } from "../utils";

async function addWishlist(userId, productId) {
  try {
    const url = `${ENV.API_URL}/${ENV.ENDPOINTS.WISHLIST}`;
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

    const response = await authFetch(url, params);

    if (response.status !== 200) throw response;

    return await response.json();
  } catch (error) {
    throw error;
  }
}

export const wishlistCtrl = {
  add: addWishlist,
  // check: checkWishlist,
  // delete: deleteWishlist,
  // getAllProducts: getAllProductWishlist,
};
