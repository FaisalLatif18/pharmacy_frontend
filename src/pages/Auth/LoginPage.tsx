import React from "react";
import LoginForm from "../../components/Auth/LoginForm";
import { Box, Center } from "@chakra-ui/react";

const LoginPage: React.FC = () => {
  return (
    <Center minH="100vh" bg="gray.50">
      <Box w="100%" maxW="400px" p={4}>
        <LoginForm />
      </Box>
    </Center>
  );
};

export default LoginPage;
