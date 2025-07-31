import {
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/form-control";
import { Box, Button, Input, Text } from "@chakra-ui/react";
import { Heading, VStack } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { login } from "../../features/auth/authService";
import { LoginRequest } from "../../features/auth/types";
import { useNavigate } from "react-router-dom";
// ✅ Validation schema
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

  const navigate = useNavigate();

  const onSubmit = async (data: LoginRequest) => {
    try {
      const response = await login(data);
      console.log("✅ Login Success:", response);
      // handle success here
    } catch (error) {
      console.error("❌ Login Error:", error);
    }
  };

  return (
    <Box maxW="md" mx="auto" p={6} borderRadius="md" bg="white" shadow="lg">
      <Heading mb={6} textAlign="center" color="#2e266d" fontWeight={600}>
        Login
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={4}>
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
            type="submit"
            bg="#2e266d"
            color="white"
            _hover={{ bg: "#241e57" }}
            loading={isSubmitting}
            width="full"
          >
            Login
          </Button>

          <Text fontSize="sm" color="#2e266d">
            Don’t have an account?{" "}
            <Button
              variant="ghost"
              color="#2e266d"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default LoginForm;
