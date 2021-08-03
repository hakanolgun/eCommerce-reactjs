import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";
import styles from "./styles.module.css";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  console.log("myproductid=", product_id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  console.log("mydata", data);
  console.log(data[product_id]);

  const images = [
    {
      original: data[product_id].image,
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
    },
  ];

  console.log("images", images);

  return (
    <div className={styles.productDetailContainerDiv}>
      <Button colorScheme="pink" ml="6">
        Add to Basket
      </Button>
      <Text as="h2" fontSize="2xl" textAlign="center" marginBlock="10">
        {data[product_id].title}
      </Text>

      <Box>
        <ImageGallery items={images}></ImageGallery>
      </Box>
      <p className={styles.description}>{data[product_id].description}</p>
    </div>
  );
}

export default ProductDetail;
