import { Text } from "react-native";
import { Layout } from "../../layouts";
import { useState, useEffect } from "react";
import { productControl } from "../../api";
import { forEach, set } from "lodash";

export function ProductScreen(props) {
  const {
    route: { params },
  } = props;
  const productId = params.productId;
  const [product, setProduct] = useState(null);

  const [images, setImages] = useState([]);
  console.log(images);

  useEffect(() => {
    getProduct();
  }, [productId]);

  const getProduct = async () => {
    try {
      const response = await productControl.getById(productId);
      setProduct({ ...response.data.attributes, id: response.data.id });

      const mainImage = response.data.attributes.main_image.data.attributes.url;
      const images = response.data.attributes.images.data;

      const arrayImage = [mainImage];
      forEach(images, (image) => {
        arrayImage.push(image.attributes.url);
      });
      setImages(arrayImage);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <Layout.Basic>
      <Text>ProductScreen</Text>

      <Text>{productId}</Text>
    </Layout.Basic>
  );
}
