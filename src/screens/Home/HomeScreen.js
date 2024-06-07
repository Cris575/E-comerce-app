import { useAuth } from "../../hooks";
import { useState, useEffect } from "react";
import { ProductBanners, GridProducts } from "../../components/Shared";
import { Layout } from "../../layouts";
import { homeBannerCtrl, productControl } from "../../api";
import Toast from "react-native-root-toast";

export function HomeScreen() {
  const { logout } = useAuth();
  const [banners, setBanner] = useState(null);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    getBanners();
    getProducts();
  }, []);

  const getBanners = async () => {
    try {
      const response = await homeBannerCtrl.getAll();
      setBanner(response?.data || null);
    } catch (error) {
      Toast.show("Error al obtener los banners", { positio: Toast.positions.CENTER });
    }
  };

  const getProducts = async () => {
    try {
      const response = await productControl.getLastedPublished();
      setProducts(response?.data || null);
    } catch (error) {
      Toast.show("Error al obtener los productos", { positio: Toast.positions.CENTER });
    }
  };
  return (
    <Layout.Basic>
      {banners && <ProductBanners banners={banners} />}
      <GridProducts title="Nuevos productos" products={products} />
    </Layout.Basic>
  );
}
