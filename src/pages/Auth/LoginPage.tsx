// import React from "react";
// import LoginForm from "../../components/Auth/LoginForm";
// import { Box, Center } from "@chakra-ui/react";

// const LoginPage: React.FC = () => {
//   return (
//     <Center minH="100vh" bg="gray.50">
//       <Box w="100%" maxW="400px" p={4}>
//         <LoginForm />
//       </Box>
//     </Center>
//   );
// };

// export default LoginPage;
import React from "react";
import { Box, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import LoginForm from "../../components/Auth/LoginForm";

import logo from "../../assets/logo.png";
const LoginPage = () => {
  return (
    <Flex height="100vh" overflow="hidden">
      {/* Left side with pharmacy image and branding */}
      <Box
        flex="1"
        bg="#c2ffe1"
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
          boxSize="180px"
          boxAlign={"center"}
          mb={4}
        />
        <Heading size="lg">Welcome to PharmacyMS</Heading>
        <Text mt={3} fontSize="md">
          Manage prescriptions, inventory & patients efficiently
        </Text>
      </Box>

      {/* Right side with form */}
      <Flex flex="1" justify="center" align="center" bg="gray.50">
        <Box
          bg="white"
          p={8}
          rounded="lg"
          shadow="md"
          width="100%"
          maxW="400px"
        >
          <Heading mb={6} textAlign="center">
            Login
          </Heading>
          <LoginForm />
        </Box>
      </Flex>
    </Flex>
  );
};

export default LoginPage;
