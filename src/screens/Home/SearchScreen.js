import { View, Text } from "react-native";
import { Layout } from "../../layouts";
import { useSearch } from "../../hooks";
import { useState, useEffect } from "react";
import Toast from "react-native-root-toast";
import { productControl } from "../../api";
import { LoadingScreen, Search, GridProducts } from "../../components/Shared";
import { size } from "lodash";

export function SearchScreen() {
  const [products, setProducts] = useState(null);
  const { searchText } = useSearch();

  useEffect(() => {
    getProductSearch();
  }, [searchText]);

  const getProductSearch = async () => {
    try {
      const response = await productControl.search(searchText);
      setProducts(response.data);
    } catch (error) {
      Toast.show("Error al obtener los productos", {
        position: Toast.positions.CENTER,
      });
    }
  };
  return (
    <Layout.Basic>
      {!products ? (
        <LoadingScreen text="Buscando productos" />
      ) : size(products) === 0 ? (
        <Search.ResultNotFound />
      ) : (
        <GridProducts products={products} />
      )}
    </Layout.Basic>
  );
}
