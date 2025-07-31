import React from "react";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import LoginForm from "../../components/Auth/LoginForm";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";
import { Image as ChakraImage } from "@chakra-ui/react";
// Motion-wrapped Chakra UI Image
const MotionImage = motion(ChakraImage);
const MotionBox = motion(Box);
const LoginPage = () => {
  return (
    <Flex height="100vh" overflow="hidden">
      {/* Left branding panel */}
      <Box
        flex="1"
        bg="#2e266d" // Deep pharmacy purple
        color="white"
        p={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <MotionImage
          src={logo}
          alt="Pharmacy Logo"
          boxSize="360px" // 🔼 Increased size
          mb={6}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
        <Heading size="lg" textAlign="center">
          Welcome to PharmacyMS
        </Heading>
        <Text mt={3} fontSize="md" textAlign="center" px={4}>
          Manage prescriptions, inventory & patients efficiently
        </Text>
      </Box>

      {/* Right login panel */}
      <Flex flex="1" justify="center" align="center" bg="gray.50">
        <MotionBox
          bg="white"
          p={8}
          rounded="lg"
          shadow="md"
          width="100%"
          maxW="450px"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
            <LoginForm />
          </MotionBox>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
