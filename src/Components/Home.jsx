import { ImAttachment } from "react-icons/im";

import {
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import Offers from "./Landing/Offers";
import Products from "./Landing/Products";
import Searchitem from "./Landing/Searchitem";

import Categories from "./Landing/Categories";
import NewLaunches from "./Landing/NewLaunches";
import Trending from "./Landing/Trending";
import Labtests from "./Landing/Labtests";
import Concern from "./Landing/Concern";
import Essentials from "./Landing/Essentials";
import Brands from "./Landing/Brands";
import DealOfTheDay from "./Landing/DealOfTheDay";
import Spotlight from "./Landing/Spotlight";
import Articles from "./Landing/Articles";
import Review from "./Landing/Review";

const Home = () => {
  return (
    <div>
      <Searchitem />
      <Products />
      <Offers />
      <Box mx={4}>
        <HStack
          border="1px solid"
          borderRadius={10}
          alignItems="center"
          gap="4"
        >
          <Box bg="blue.50" py={9} px={7} borderLeftRadius={10}>
            <HStack gap={5}>
              <Box>
                <Image
                  src="https://assets.pharmeasy.in/apothecary/images/rx_upload.svg?dim=1280x0"
                  alt="image"
                />
              </Box>
              <VStack gap={3} alignItems={"start"}>
                <Box>
                  <Box>
                    <Text fontWeight="600">Order with Prescription</Text>
                  </Box>
                  <Box>
                    <Text>
                      Upload prescription and we will deliver your medicines
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Button
                    leftIcon={<ImAttachment />}
                    colorScheme="teal"
                    variant="solid"
                  >
                    Upload
                  </Button>
                </Box>
              </VStack>
            </HStack>
          </Box>
          <Box>
            <VStack alignItems="start">
              <Box>
                <Text as={"b"}>How does this work?</Text>
              </Box>
              <HStack>
                <Box>
                  <Button boxSize={"36px"} color="#3661b0" borderRadius={"8px"}>
                    1
                  </Button>
                </Box>
                <Box>
                  <Text>Upload a photo of your prescription</Text>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <Button boxSize={"36px"} color="#3661b0" borderRadius={"8px"}>
                    2
                  </Button>
                </Box>
                <Box>
                  <Text>Add delivery address and place the order</Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
          <Box pt={8} maxW="30%">
            <VStack alignItems={"start"}>
              <HStack>
                <Box>
                  <Button boxSize={"36px"} color="#3661b0" borderRadius={"8px"}>
                    3
                  </Button>
                </Box>
                <Box>
                  <Text>We will call you to confirm the medicines</Text>
                </Box>
              </HStack>
              <HStack>
                <Box>
                  <Button boxSize={"36px"} color="#3661b0" borderRadius={"8px"}>
                    4
                  </Button>
                </Box>
                <Box>
                  <Text>
                    Now, sit back! your medicines will get delivered at your
                    doorstep
                  </Text>
                </Box>
              </HStack>
            </VStack>
          </Box>
        </HStack>
      </Box>
      <Categories />
      <NewLaunches />
      <Trending />
      <Labtests />
      <Concern />
      <Essentials />
      <Brands />
      <DealOfTheDay />
      <Spotlight />
      <HStack mx={4}>
        <Box w="25%" _hover={{ cursor: "pointer" }}>
          <Image
            src="https://cdn01.pharmeasy.in/dam/banner/banner/7b2e305484a-DevicesClearanceStore.jpg?dim=1440x0"
            alt="image"
            borderRadius={10}
          />
        </Box>
        <Box w="25%" _hover={{ cursor: "pointer" }}>
          <Image
            src="https://cdn01.pharmeasy.in/dam/banner/banner/0fa23978f05-Omez.jpg?dim=1440x0"
            alt="image"
            borderRadius={10}
          />
        </Box>
        <Box w="25%" _hover={{ cursor: "pointer" }}>
          <Image
            src="https://cdn01.pharmeasy.in/dam/banner/banner/6f91440bbe5-Zedex.jpg?dim=1440x0"
            alt="image"
            borderRadius={10}
          />
        </Box>
      </HStack>
      <Articles />
      <Box backgroundColor="rgb(248, 249, 255)" p={4}>
        <Box mb={9}>
          <Text fontSize="32px" fontWeight="semibold">
            Why Choose Us?
          </Text>
        </Box>
        <HStack mb={9} gap={4}>
          <HStack w="25%" alignItems="center">
            <Box w="45%">
              <Image
                w="100%"
                src="https://assets.pharmeasy.in/apothecary/images/family.svg?dim=96x0"
                alt="image"
              />
            </Box>
            <VStack alignItems={"start"}>
              <Box>
                <Text fontWeight="semibold" fontSize="24px">
                  32 Milion+
                </Text>
              </Box>
              <Box>
                <Text>Registered users as of Mar 31, 2022</Text>
              </Box>
            </VStack>
          </HStack>
          <HStack w="25%" alignItems="center" gap={3}>
            <Box w="45%">
              <Image
                w="100%"
                src="https://assets.pharmeasy.in/apothecary/images/deliveryBoy.svg?dim=96x0"
                alt="image"
              />
            </Box>
            <VStack alignItems={"start"}>
              <Box>
                <Text fontWeight="semibold" fontSize="24px">
                  36 Milion+
                </Text>
              </Box>
              <Box>
                <Text>Orders on Pharmeasy till date </Text>
              </Box>
            </VStack>
          </HStack>
          <HStack w="25%" alignItems="center" gap={3}>
            <Box w="45%">
              <Image
                w="100%"
                src="https://assets.pharmeasy.in/apothecary/images/pincodeServed.svg?dim=96x0"
                alt="image"
              />
            </Box>
            <VStack alignItems={"start"}>
              <Box>
                <Text fontWeight="semibold" fontSize="24px">
                  99000+
                </Text>
              </Box>
              <Box>
                <Text>Unique items sold last 3 months</Text>
              </Box>
            </VStack>
          </HStack>
          <HStack w="25%" alignItems="center" gap={3}>
            <Box w="45%">
              <Image
                w="100%"
                src="https://assets.pharmeasy.in/apothecary/images/locationMarker.svg?dim=96x0"
                alt="image"
              />
            </Box>
            <VStack alignItems={"start"}>
              <Box>
                <Text fontWeight="semibold" fontSize="24px">
                  19500+
                </Text>
              </Box>
              <Box>
                <Text>Pin codes serviced last 3 months</Text>
              </Box>
            </VStack>
          </HStack>
        </HStack>
      </Box>
      <Box my={"70px"} position="relative">
        <Box
          w="27%"
          textAlign="center"
          top="10%"
          left="40%"
          position={"absolute"}
        >
          <Heading>Simplifying Healthcare Impacting Lives</Heading>
          <Text fontWeight={"semibold"} fontSize="20px" my={2}>
            Download the App for Free
          </Text>
          <HStack justifyContent={"space-between"} mt="43px">
            <Box>
              <Image
                _hover={{ cursor: "pointer" }}
                src="https://assets.pharmeasy.in/apothecary/images/googlePlay.svg?dim=256x0"
                alt="image"
              />
            </Box>
            <Box>
              <Image
                _hover={{ cursor: "pointer" }}
                src="https://assets.pharmeasy.in/apothecary/images/appStore.svg?dim=256x0"
                alt="image"
              />
            </Box>
          </HStack>
        </Box>
        <Image
          bgColor="#5EEBE4"
          src="https://assets.pharmeasy.in/apothecary/images/downloadBanner.webp?dim=1440x0&q=100"
          alt="image"
        />
      </Box>
      <Review />
    </div>
  );
};

export default Home;
