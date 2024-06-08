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

export const wishlistCtrl = {
  add: addWishlist,
};
