import { ApiResponse } from "@/library/type";
import apiGrabitSlice from "@/services/apiGrabitSlice";

interface LoginRequest {
  body: { email: string; password: string };
}

interface RegisterRequest {
  body: {
    email: string;
    password: string;
    fullName: string;
    role: "ROLE_CUSTOMER" | "ROLE_RESTAURANT_OWNER";
  };
}
const authApiSlice = apiGrabitSlice.injectEndpoints({
  endpoints: (build) => ({
    loginUser: build.mutation<ApiResponse, LoginRequest>({
      query: ({ body }) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    registerUser: build.mutation<ApiResponse, RegisterRequest>({
      query: ({ body }) => ({
        url: "/auth/signup",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useLoginUserMutation: useLoginUser,
  useRegisterUserMutation: useRegisterUser,
} = authApiSlice;
