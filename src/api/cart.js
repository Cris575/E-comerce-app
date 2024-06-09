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

  await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(products));
}

async function count() {
  const products = await getAllProducts();

  let count = 0;

  forEach(products, (product) => {
    count += product.quatity;
  });

  return count;
}

async function deleteProduct(productId) {
  const products = await getAllProducts();
  const updateProduct = products.filter((product) => product.id !== productId);
  await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(updateProduct));
}

async function increaseProduct(productId) {
  try {
    const products = await getAllProducts();
    map(products, (product) => {
      if (product.id === productId) {
        return (product.quatity += 1);
      }
    });
    await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(products));
  } catch (error) {
    throw error;
  }
}

async function decreaseProduct(productId) {
  try {
    let isDelete = false;

    const products = await getAllProducts();
    map(products, (product) => {
      if (product.id === productId) {
        if (product.quatity === 1) {
          isDelete = true;
          return null;
        } else {
          return (product.quatity -= 1);
        }
      }
    });

    if (isDelete) {
      await deleteProduct(productId);
    } else {
      await AsyncStorage.setItem(ENV.STORAGE.CART, JSON.stringify(products));
    }
  } catch (error) {
    throw error;
  }
}
export const cartCtrl = {
  add: addCart,
  getAll: getAllProducts,
  count,
  delete: deleteProduct,
  increaseProduct,
  decreaseProduct,
};
