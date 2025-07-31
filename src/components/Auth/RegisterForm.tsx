import React from "react";
import {
  Box,
  Button,
  Heading,
  Input,
  VStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/select";
import { FormControl, FormErrorMessage } from "@chakra-ui/form-control";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { registerUser } from "../../features/auth/authService";
import { useNavigate } from "react-router-dom";
import { useToast } from "@chakra-ui/toast";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
} from "@chakra-ui/modal";
// ✅ Schema
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
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const toast = useToast();
  const navigate = useNavigate();
  const { open, onOpen, onClose } = useDisclosure();

  const onSubmit = async (data: FormData) => {
    try {
      const res = await registerUser(data);
      if (res?.data) {
        onOpen();
        reset();
      }
    } catch (err) {
      toast({
        title: "Registration failed",
        description: "Please try again.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Box maxW="md" mx="auto" p={6} borderRadius="md" bg="white" shadow="lg">
        <Heading mb={6} textAlign="center" color="#2e266d">
          Create Account
        </Heading>
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
              bg="#2e266d"
              color="white"
              _hover={{ bg: "#231e57" }}
              width="full"
              loading={isSubmitting}
            >
              Register
            </Button>

            <Text fontSize="sm" textAlign="center">
              Already have an account?{" "}
              <Button
                variant="ghost"
                color="#2e266d"
                onClick={() => navigate("/login")}
              >
                Login
              </Button>
            </Text>
          </VStack>
        </form>
      </Box>

      {/* ✅ Success Modal */}
      <Modal isOpen={open} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Success!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Your account has been created. You can now log in.
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="green"
              mr={3}
              onClick={() => {
                onClose();
                navigate("/login");
              }}
            >
              Go to Login
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default RegisterForm;
