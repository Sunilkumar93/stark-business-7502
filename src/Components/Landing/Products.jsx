import { Container, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios.get("http://localhost:8080/products");
};

const Products = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);
  return (
    <Container maxW={"100%"} mx={0}>
      <Grid gridTemplateColumns={"repeat(8,1fr)"}>
        {data?.map((card) => {
          return (
            <GridItem key={card.id} textAlign="center" alignItems={"center"}>
              <Image src={card.image} alt="image" />
              <Text fontWeight={"600"} >
                {card.title}
              </Text>
              <Text as={"b"} color="red.400">
                {card.discount}
              </Text>
            </GridItem>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
