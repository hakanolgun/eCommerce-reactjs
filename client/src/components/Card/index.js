import React from "react";
import { Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

function Card({ item }) {
  return (
    <Box
      className={styles.box}
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="3"
    >
      <Link className={styles.link} to={`/product/${item.id}`}>
        <Image
          className={styles.cardImage}
          src={item.image}
          alt="product"
          loading="lazy"
        />
        <Box p="6">
          <Box
            fontSize="medium"
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
          >
            {item.title}
          </Box>
          <Box>₺ {item.price}</Box>
        </Box>
      </Link>
      <Button colorScheme="pink">Add to basket</Button>
    </Box>
  );
}

export default Card;
