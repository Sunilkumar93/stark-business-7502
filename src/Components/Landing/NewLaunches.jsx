import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = () => {
  return axios.get("http://localhost:8080/newlaunches");
};

const NewLaunches = () => {
  const [data, setData] = React.useState([]);
  const [slides, setSlides] = React.useState({
    start: 0,
    end: 6,
  });

  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  return (
    <Container maxW="100%" alignItems="center" justifyContent={"start"} my={9}>
      <Box my={1}>
        <Heading size="lg" as="h2">
          New Launches
        </Heading>
      </Box>
      <Box>
        <Text fontSize="lg">New wellness range just for you!</Text>
      </Box>
      <Flex gap={5} position="relative" my={6} w="100%">
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
        {slides.end !== data.length - 1 && slides.end<data.length && (
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

        {data?.map((item, index) => {
          return (
            <VStack
              key={item.id}
              textAlign="start"
              w="14%"
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
                boxSize={156}
              >
                <Image src={item.image} alt="image" boxSize={148} />
              </Box>
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
                <Text fontWeight={"600"}>{item.price && "₹" + item.price}</Text>
                <Text fontWeight={"600"} color={"red.400"}>
                  {item.off}
                </Text>
              </Flex>
            </VStack>
          );
        })}
      </Flex>
    </Container>
  );
};

export default NewLaunches;
