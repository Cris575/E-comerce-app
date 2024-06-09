import { map, forEach } from "lodash";
import { ENV } from "../utils";
import AsyncStorage from "@react-native-async-storage/async-storage";

async function getAllProducts() {
  const response = await AsyncStorage.getItem(ENV.STORAGE.CART);

  if (!response) {
    return [];
  } else {
    return JSON.parse(response);
  }
}

async function addCart(productId) {
  const products = await getAllProducts();
  const objIndex = products.findIndex((product) => product.id === productId);
  if (objIndex < 0) {
    products.push({ id: productId, quatity: 1 });
  } else {
    const product = products[objIndex];
    products[objIndex].quatity = product.quatity + 1;
  }

  console.log(products);

  await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(products));
}

export const cartCtrl = {
  add: addCart,
  getAll: getAllProducts,
};
