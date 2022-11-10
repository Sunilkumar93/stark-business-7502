import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React from "react";

const getData = (url) => {
  return axios({
    method: "get",
    baseURL: "http://localhost:8080",
    url: url,
  });
};
const Offers = () => {
  const [offerCards, setOfferCards] = React.useState([]);
  const [offer, setOffer] = React.useState([]);
  React.useEffect(() => {
    getData("/offerCards").then((res) => setOfferCards(res.data));
    getData("/offers").then((res) => setOffer(res.data));
  }, []);

  return (
    <Container my="10" w="70%" mx={0}>
      <HStack gap={4} my={9}>
        {offerCards?.map((offer) => {
          return (
            <Image
              key={offer.id}
              src={offer.image}
              borderRadius="13"
              alt="card"
            />
          );
        })}
      </HStack>
      <Heading as="h6" size={"lg"}>
        Offers Just for You
      </Heading>
      <HStack w="120%" my={9} >
        {offer?.map((offer) => {
          return (
            <Box key={offer.id} border="1px solid " borderRadius={10} p={3} >
              <Flex gap={4}>
                <Box >
                  <Image
                    src={offer.image}
                    w={100}
                    borderRadius="10"
                    alt="image"
                  />
                </Box>
                <Box>
                  <Text>
                    {offer.offer}
                  </Text>
                </Box>
              </Flex>
            </Box>
          );
        })}
      </HStack>
    </Container>
  );
};

export default Offers;
