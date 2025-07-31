import React from "react";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import RegisterForm from "../../components/Auth/RegisterForm";
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const RegisterPage = () => {
  return (
    <Flex height="100vh" overflow="hidden">
      {/* Left Branding Section */}
      <Box
        flex="1"
        bg="#2e266d"
        color="white"
        p={10}
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Image
          src={logo}
          alt="Pharmacy Logo"
          boxSize="360px"
          objectFit="contain"
          mb={6}
        />
        <Heading size="lg">Join PharmacyMS</Heading>
        <Text mt={3} fontSize="md" textAlign="center">
          Create your account to manage inventory and patients efficiently.
        </Text>
      </Box>

      {/* Right Form Section with Animation */}
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
          <RegisterForm />
        </MotionBox>
      </Flex>
    </Flex>
  );
};

export default RegisterPage;
