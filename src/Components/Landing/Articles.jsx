import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios({
    method: "get",
    baseURL: "http://localhost:8080",
    url: "/articles",
  });
};

const Articles = () => {
  const [data, setData] = React.useState([]);
  const [slides, setSlides] = React.useState({
    start: 0,
    end: 4,
  });
  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  return (
    <Container my={10} justifyContent={"center"} maxW="100%">
      <Box my={2}>
        <Heading size="lg" as="h2">
          Health Articles
        </Heading>
      </Box>
      <Box my={2}>
        <Text fontSize="lg">Get up-to-date on our latest health updates</Text>
      </Box>
      <Flex my={9} gap={7} position="relative">
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
                textAlign="center"
                alignItems="center"
                border="1px solid"
                w="18%"
                gap={1}
                borderRadius={10}
                _hover={{
                  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
                  cursor: "pointer",
                }}
              >
                <Box borderRadius={10} boxSize={220}>
                  <Image
                    borderTopRadius={10}
                    w="100%"
                    h="100%"
                    src={item.image}
                    alt="image"
                  />
                </Box>
                <Box>
                  <Text fontWeight={"600"}>{item.about}</Text>
                </Box>
              </VStack>
            )
          );
        })}
      </Flex>
    </Container>
  );
};

export default Articles;
