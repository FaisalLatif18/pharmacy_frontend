export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
}

export interface RegisterPayload  {
  name: string;
  email: string;
  password: string;
  role: "PHARMACIST" | "ADMIN" | "VISITOR";
}
