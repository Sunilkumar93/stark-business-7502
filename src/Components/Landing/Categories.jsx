import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios({
    method: "get",
    baseURL: "http://localhost:8080",
    url: "/Categories",
  });
};

const Categories = () => {
  const [data, setData] = React.useState([]);
  const [slides, setSlides] = React.useState({
    start: 0,
    end: 6,
  });
  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  return (
    <Container my={10} justifyContent={"center"} maxW="100%">
      <Box my={9}>
        <Heading size="lg" as="h2">
          Shop by Categories
        </Heading>
      </Box>
      <Flex gap={5} position="relative">
        <Button
          bg={"gray.900"}
          variant="unstyled"
          color={"whiteAlpha.900"}
          borderRadius={150}
          position="absolute"
          top="25%"
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
          top="25%"
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
        {data?.map((item, index) => {
          return (
            index <= slides.end &&
            index >= slides.start && (
              <Box key={item.id} textAlign="center">
                <Box
                  border="1px solid gray"
                  borderRadius={10}
                  p={1}
                  _hover={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    cursor: "pointer",
                  }}
                >
                  <Image src={item.image} alt="image" />
                </Box>
                <Box my={3} mx={6}>
                  <Text fontWeight={"600"}>{item.Category}</Text>
                </Box>
              </Box>
            )
          );
        })}
      </Flex>
    </Container>
  );
};

export default Categories;
