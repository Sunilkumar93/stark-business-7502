import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios.get("http://localhost:8080/products");
};

const Products = () => {
  const [data, setData] = React.useState([]);

  const [slides, setSlides] = React.useState({
    start: 0,
    end: 6,
  });

  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);
  return (
    <Container maxW={"100%"} mx={0}>
      <Flex gap={5} position="relative">
        <Button
          bg={"gray.900"}
          variant="unstyled"
          color={"whiteAlpha.900"}
          borderRadius={150}
          position="absolute"
          top="33%"
          left="10px"
          zIndex={10}
          disabled={slides.start === 0}
          onClick={() =>
            setSlides({
              ...slides,
              start: slides.start - 1,
              end: slides.end - 1,
            })
          }
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          bg={"gray.900"}
          variant="unstyled"
          color={"whiteAlpha.900"}
          borderRadius={150}
          position="absolute"
          top="33%"
          right="10px"
          zIndex={10}
          disabled={slides.end === data.length - 1}
          onClick={() =>
            setSlides({
              ...slides,
              start: slides.start + 1,
              end: slides.end + 1,
            })
          }
        >
          <ArrowRightIcon />
        </Button>
        {data?.map((card, index) => {
          return (
            index <= slides.end &&
            index >= slides.start && (
              <Box
                key={card.id}
                textAlign="center"
                alignItems={"center"}
                borderRadius={10}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                }}
              >
                <Image src={card.image} alt="image" />
                <Text fontWeight={"600"}>{card.title}</Text>
                <Text as={"b"} color="red.400">
                  {card.discount}
                </Text>
              </Box>
            )
          );
        })}
      </Flex>
    </Container>
  );
};

export default Products;
