import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios({
    method: "get",
    baseURL: "https://mock-server-app-3436.onrender.com",
    url: "/trending",
  });
};

const Essentials = () => {
  const [data, setData] = React.useState([]);
  const [slides, setSlides] = React.useState({
    start: 0,
    end: 5,
  });
  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  return (
    <Container my={10} justifyContent={"center"} maxW="100%">
      <Box my={2}>
        <Heading size="lg" as="h2">
          Wellness Essentials of the Week
        </Heading>
      </Box>
      <Box my={2}>
        <Text fontSize="lg">Super charge your immunity with us</Text>
      </Box>
      <Grid   templateColumns="repeat(3, 1fr)" gap={5} position="relative" my={6}>
        {slides.start !== 0 && (
          <Button
            bg={"gray.900"}
            variant="unstyled"
            color={"whiteAlpha.900"}
            borderRadius={150}
            position="absolute"
            top="45%"
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
            top="45%"
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

        {data?.map((item, index) => {
          return (
            index <= slides.end &&
            index >= slides.start && (
              <Flex
              
              justifyContent="space-around"
                key={item.id}
                textAlign="start"
                alignItems="start"
                _hover={{
                  cursor: "pointer",
                }}
              >
                <Box
                  border="1px solid gray"
                  borderRadius={10}
                  p={1}
                  _hover={{
                    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                    cursor: "pointer",
                  }}
                  boxSize={158}
                >
                  <Image w="100%" h="100%" src={item.image} alt="image" />
                </Box>
                <VStack alignItems="start" w="50%" >
                  <Box>
                    <Text noOfLines={2} fontWeight={"600"}>
                      {item.title}
                    </Text>
                  </Box>
                  <HStack>
                    <Text fontWeight={"600"}>MRP</Text>
                    <Text as="del" fontWeight={"600"}>
                      {item.mrp}
                    </Text>
                  </HStack>
                  <Flex gap={2}>
                    <Text fontWeight={"600"}>
                      {item.price && "₹" + item.price}
                    </Text>
                    <Text fontWeight={"600"} color={"red.400"}>
                      {item.off}
                    </Text>
                  </Flex>
                </VStack>
              </Flex>
            )
          );
        })}
      </Grid>
    </Container>
  );
};

export default Essentials;
