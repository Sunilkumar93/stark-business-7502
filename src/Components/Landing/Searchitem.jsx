import { RiFileList2Line } from "react-icons/ri";

import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { SearchIcon } from "@chakra-ui/icons";

const Searchitem = () => {
  return (
    <Container my={9} maxW={"60%"} mx={"auto"} justifyContent="center">
      <VStack>
        <HStack w="100%">
          <Box>
            <Heading as="h6" size="md">
              What are you looking for?
            </Heading>
          </Box>
          <Spacer />

          <HStack>
            <Box>
              <RiFileList2Line />
            </Box>
            <Box>
              <Text fontSize="16px">Order with prescription.</Text>
            </Box>
            <Box>
              <Button
                color="teal.600"
                variant={"nostyle"}
                fontWeight="bold"
                fontSize="18px"
              >
                UPLOAD NOW {">"}
              </Button>
            </Box>
          </HStack>
        </HStack>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input borderRadius="150" placeholder="Search for Medicine" />
          <InputRightElement
            width="5.5rem"
            children={
              <Button
                size="sm"
                borderRadius={150}
                colorScheme="teal"
                variant="solid"
              >
                Search
              </Button>
            }
          />
        </InputGroup>
      </VStack>
    </Container>
  );
};

export default Searchitem;
