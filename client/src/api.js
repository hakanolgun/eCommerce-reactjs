import axios from "axios";

export const fetchProductList = async ({ pageParam = 0 }) => {
  const { data } = await axios.get(
    `https://fakestoreapi.com/products?${pageParam}`
  );

  return data;
};

export const fetchProduct = async (id) => {
  const { data } = await axios.get(`https://fakestoreapi.com/products/${id}`);

  return data;
};

export const fetchRegister = async (input) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`,
    input
  );
  return data;
};
