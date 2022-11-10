import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  HStack,
  Image,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import { BsPhone } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { CiPercent } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import React from "react";
import Dawai from "./Dawai.png";
import PincodeDrawer from "./PincodeDrawer";

const Navbar = () => {
  return (
    <>
      <Container
        maxW={"full"}
        flexDirection="row"
        display={"flex"}
        py={2}
        px={9}
      >
        <Flex gap={9} alignItems="center">
          <Box>
            <Image src={Dawai} alt="logo" />
          </Box>
          <Divider orientation="vertical" />
          <VStack spacing="0">
            <HStack>
              <Image src="https://assets.pharmeasy.in/apothecary/images/ic_express%20delivery.svg?dim=16x0" />
              <Text lineHeight="16px" as="b" fontSize="12px" color="#4F585E">
                Express delivery to
              </Text>
            </HStack>
            <PincodeDrawer />
          </VStack>
        </Flex>
        <Spacer />
        <Flex gap={9} alignItems="center">
          <Box>
            <Button>{<BsPhone />} Download App</Button>
          </Box>
          <Box>
            <Button variant="link">{<HiOutlineUser />} Hello, Login</Button>
          </Box>
          <Box>
            <Button variant="link">{<CiPercent />} Offers</Button>
          </Box>
          <Box>
            <Button variant="link">{<AiOutlineShoppingCart />} Cart</Button>
          </Box>
        </Flex>
      </Container>
      <Divider />
    </>
  );
};

export default Navbar;
