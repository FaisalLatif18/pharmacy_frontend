import axios from '../../services/axios';
import { LoginRequest, LoginResponse } from './types';

export const login = async (data: LoginRequest): Promise<LoginResponse> => {
  const response = await axios.post('/auth/login', data);
  return response.data;
};
