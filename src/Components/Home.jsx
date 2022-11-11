import { ImAttachment } from "react-icons/im";

import { Box, Button, HStack, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Offers from "./Landing/Offers";
import Products from "./Landing/Products";
import Searchitem from "./Landing/Searchitem";

import Categories from "./Landing/Categories";

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
    </div>
  );
};

export default Home;
