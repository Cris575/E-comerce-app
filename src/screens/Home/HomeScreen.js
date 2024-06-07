import { useAuth } from "../../hooks";
import { useState, useEffect } from "react";
import { ProductBanners, ProductBannersro } from "../../components/Shared";
import { Layout } from "../../layouts";
import { homeBannerCtrl } from "../../api";
import Toast from "react-native-root-toast";

export function HomeScreen() {
  const { logout } = useAuth();
  const [banners, setBanner] = useState(null);

  useEffect(() => {
    getBanners();
  }, []);

  const getBanners = async () => {
    try {
      const response = await homeBannerCtrl.getAll();
      setBanner(response?.data || null);
    } catch (error) {
      Toast.show("Error al obtener los banners", { positio: Toast.positions.CENTER });
    }
  };

  return <Layout.Basic>{banners && <ProductBanners banners={banners} />}</Layout.Basic>;
}
