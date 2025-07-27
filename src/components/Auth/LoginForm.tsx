import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { VStack } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../features/auth/authService";
import { LoginRequest } from "../../features/auth/types";

const schema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("Password is required"),
});

const LoginForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<LoginRequest>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await login(data);
      console.log("Login Success:", response);
      // You can store token or redirect here
    } catch (error) {
      console.error("Login Error:", error);
    }
  };

  return (
    <Box maxW="sm" mx="auto" mt={8} p={6} borderWidth={1} borderRadius="lg">
      <Text fontSize="2xl" mb={4} textAlign="center">
        Login
      </Text>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack spacing={4}>
          <FormControl isInvalid={!!errors.email}>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              {...register("email")}
            />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              id="password"
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <Button
            colorScheme="teal"
            type="submit"
            loading={isSubmitting}
            width="full"
          >
            Login
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginForm;
