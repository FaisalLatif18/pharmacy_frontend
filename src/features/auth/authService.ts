import axios from '../../services/axios';
import { LoginRequest, LoginResponse } from './types';
import { RegisterPayload } from "./types";
const API_BASE = "/auth";

// 🔐 Register new user
export const registerUser = async (data: RegisterPayload) => {
  const response = await axios.post(`${API_BASE}/register`, data);
  return response.data;
};
export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post(`${API_BASE}/login`, data);
  return response.data;
};
