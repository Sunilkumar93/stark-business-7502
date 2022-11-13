import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios.get("https://mock-server-app-3436.onrender.com/products");
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
        {slides.start !== 0 && (
          <Button
            bg={"gray.900"}
            variant="unstyled"
            color={"whiteAlpha.900"}
            borderRadius={150}
            position="absolute"
            top="25%"
            left="10px"
            zIndex={10}
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
        )}
        {slides.end !== data.length - 1 && slides.end < data.length && (
          <Button
            bg={"gray.900"}
            variant="unstyled"
            color={"whiteAlpha.900"}
            borderRadius={150}
            position="absolute"
            top="25%"
            right="10px"
            zIndex={10}
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
        )}
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
                  cursor: "pointer",
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
