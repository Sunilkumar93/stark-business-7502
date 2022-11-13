import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { ImQuotesLeft } from "react-icons/im";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios({
    method: "get",
    baseURL: "https://mock-server-app-3436.onrender.com",
    url: "/reviews",
  });
};

const Review = () => {
  const [data, setData] = React.useState([]);
  const [slides, setSlides] = React.useState({
    start: 0,
    end: 2,
  });
  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  return (
    <Container my={10} justifyContent={"center"} maxW="100%">
      <Box my={2}>
        <Heading size="lg" as="h2">
          What Our Customers have to Say
        </Heading>
      </Box>

      <Flex my={9} gap={5} position="relative">
        {slides.start !== 0 && (
          <Button
            bg={"gray.900"}
            variant="unstyled"
            color={"whiteAlpha.900"}
            borderRadius={150}
            position="absolute"
            top="40%"
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
            top="40%"
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
              <VStack
                key={item.id}
                textAlign="start"
                alignItems="start"
                px={3}
                py={3}
                w="33%"
                borderRadius={10}
                _hover={{
                  cursor: "pointer",
                }}
              >
                <Box>
                  <Text fontWeight={"semibold"}>{item.name}</Text>
                </Box>
                <Box mt="0px">
                  <Text>{item.date}</Text>
                </Box>
                <Box backgroundColor="#F2FFF8">
                  <ImQuotesLeft />
                  <Text>{item.review}</Text>
                </Box>
              </VStack>
            )
          );
        })}
      </Flex>
    </Container>
  );
};

export default Review;
