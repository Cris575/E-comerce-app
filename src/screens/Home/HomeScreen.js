import { SafeAreaView, Text } from "react-native";
import { useAuth } from "../../hooks";
import { Button } from "react-native-paper";
import { useState, useEffect } from "react";
import { homeBannerCtrl } from "../../api";
import Toast from "react-native-root-toast";

export function HomeScreen() {
  const { logout } = useAuth();
  const [banner, setBanner] = useState(null);

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

  return (
    <SafeAreaView>
      <Text>HomeScreen</Text>

      <Button onPress={logout}>Cerrera sesión</Button>
    </SafeAreaView>
  );
}
