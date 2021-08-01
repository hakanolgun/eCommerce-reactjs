import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { fetchProduct } from "../../api";
import { Box, Text, Button } from "@chakra-ui/react";
import ImageGallery from "react-image-gallery";

function ProductDetail() {
  const { product_id } = useParams();

  const { isLoading, isError, data } = useQuery(["product", product_id], () =>
    fetchProduct(product_id)
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error.</div>;
  }

  console.log(data);

  const images = [
    {
      original: data.image,
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
    <div>
      <Button colorScheme="pink">Add to Basket</Button>
      <Text as="h2" fontSize="2xl">
        {data.title}
      </Text>
      <p>{data.description}</p>

      <Box>
        <ImageGallery items={images}></ImageGallery>
      </Box>
    </div>
  );
}

export default ProductDetail;
