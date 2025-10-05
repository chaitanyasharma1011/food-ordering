import { ApiResponse } from "@/library/type";
import apiGrabitSlice from "@/services/apiGrabitSlice";

const userApiSlice = apiGrabitSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchUserInfo: build.query<ApiResponse, void>({
      query: () => ({
        url: "/api/users/profile",
        method: "GET",
      }),
    }),
    toggleFavourites: build.mutation<ApiResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/api/users/toggleFavs/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useFetchUserInfoQuery: useUserInfo,
  useLazyFetchUserInfoQuery: useLazyUserInfo,
  useToggleFavouritesMutation: useToggleFavourites,
} = userApiSlice;
