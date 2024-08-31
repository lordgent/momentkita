import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from 'sweetalert2'

interface LoginParams {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  token: string;
}

interface LoginError {
  message: string;
}

const fetchLoginPost = createAsyncThunk<
  User,
  LoginParams,
  { rejectValue: LoginError }
>("api/fetchData", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await axios.post<User>(
      "http://localhost:8080/api/v1/auth/login",
      {
        email,
        password,
      }
    );
    localStorage.setItem('token', JSON.stringify(response.data.token));
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
        Swal.fire({
            text: error.response?.data.message,
            icon: 'error',
          })

      return rejectWithValue(
        error.response?.data || { message: "An unknown error occurred" }
      );
    } else {
        Swal.fire({
            text: "",
            icon: 'error',
          })
      return rejectWithValue({
        message:
          error instanceof Error ? error.message : "An unknown error occurred",
      });
    }
  }
});
export default fetchLoginPost
