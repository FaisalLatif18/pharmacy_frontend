import React from "react";
import { Box, Button, Heading, Input, VStack, Text } from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../features/auth/authService";
import { useNavigate } from "react-router-dom";

// ✅ 1. Add role to schema
const schema = yup.object({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  password: yup.string().min(6, "Minimum 6 characters").required(),
  role: yup
    .string()
    .oneOf(["PHARMACIST", "ADMIN", "VISITOR"])
    .required("Role is required"),
});

type FormData = yup.InferType<typeof schema>;

const RegisterForm: React.FC = () => {
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = async (data: FormData) => {
    try {
      console.log("Registering user:", data);
      const res = await registerUser(data);
      console.log("✅ Register Success:", res);
      navigate("/login");
    } catch (err) {
      console.error("❌ Register Failed", err);
    }
  };

  return (
    <Box maxW="md" mx="auto" mt={10} p={6} borderWidth={1} borderRadius="md">
      <Heading mb={6}>Create Account</Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <VStack gap={4}>
          <FormControl isInvalid={!!errors.name}>
            <Input placeholder="Name" {...register("name")} />
            <FormErrorMessage>{errors.name?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.email}>
            <Input placeholder="Email" type="email" {...register("email")} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.password}>
            <Input
              placeholder="Password"
              type="password"
              {...register("password")}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>

          <FormControl isInvalid={!!errors.role}>
            <Select placeholder="Select Role" {...register("role")}>
              <option value="PHARMACIST">Pharmacist</option>
              <option value="ADMIN">Admin</option>
              <option value="VISITOR">Visitor</option>
            </Select>
            <FormErrorMessage>{errors.role?.message}</FormErrorMessage>
          </FormControl>

          <Button
            type="submit"
            colorScheme="blue"
            width="full"
            loading={isSubmitting}
          >
            Register
          </Button>

          <Text fontSize="sm">
            Already have an account?{" "}
            <Button
              variant="ghost"
              colorScheme="blue"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Text>
        </VStack>
      </form>
    </Box>
  );
};

export default RegisterForm;
