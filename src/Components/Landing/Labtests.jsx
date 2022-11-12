import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { HiOutlineThumbUp } from "react-icons/hi";
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
  return axios({
    method: "get",
    baseURL: "http://localhost:8080",
    url: "/labtests",
  });
};

const Labtests = () => {
  const [data, setData] = React.useState([]);
  const [slides, setSlides] = React.useState({
    start: 0,
    end: 5,
  });
  React.useEffect(() => {
    getData().then((res) => setData(res.data));
  }, []);

  return (
    <Container
      my={10}
      justifyContent={"center"}
      maxW="100%"
      py={5}
      backgroundImage=" linear-gradient(rgb(242, 247, 255) 0%, rgba(220, 233, 255, 0) 100%);"
    >
      <Box my={1}>
        <Heading size="lg" as="h2">
          Lab Tests by Health Concern
        </Heading>
      </Box>
      <Flex gap={2}>
        <Text fontSize="lg">Powered by </Text>
        <Image
          src="https://assets.pharmeasy.in/apothecary/images/Thyrocare.webp?dim=1280x0"
          alt="image"
          w="10%"
        />
      </Flex>
      <Flex gap={8} position="relative" my={6} w="100%">
        <HStack px={1}>
          <Box>
            <HiOutlineThumbUp size={32} />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="semibold" >Recommended by health experts</Text>
          </Box>
        </HStack>
        <HStack px={1}>
          <Box>
            <HiOutlineThumbUp size={32} />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="semibold" >Recommended by health experts</Text>
          </Box>
        </HStack>
        <HStack px={1}>
          <Box>
            <HiOutlineThumbUp size={32} />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="semibold" >Recommended by health experts</Text>
          </Box>
        </HStack>
        <HStack px={1}>
          <Box>
            <HiOutlineThumbUp size={32} />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="semibold" >Recommended by health experts</Text>
          </Box>
        </HStack>
        <HStack px={1}>
          <Box>
            <HiOutlineThumbUp size={32} />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="semibold" >Recommended by health experts</Text>
          </Box>
        </HStack>
        <HStack px={1}>
          <Box>
            <HiOutlineThumbUp size={32} />
          </Box>
          <Box>
            <Text fontSize="16px" fontWeight="semibold" >Recommended by health experts</Text>
          </Box>
        </HStack>
       
      </Flex>
      <Flex gap={5} position="relative" my={6} w="100%">
        {slides.start !== 0 && (
          <Button
            bg={"gray.900"}
            variant="unstyled"
            color={"whiteAlpha.900"}
            borderRadius={150}
            position="absolute"
            top="35%"
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
            top="35%"
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
                w="16%"
                _hover={{
                  cursor: "pointer",
                }}
              >
                <Box borderRadius={10} >
                  <Image  src={item.image} alt="image" />
                </Box>
              </VStack>
            )
          );
        })}
      </Flex>
    </Container>
  );
};

export default Labtests;
