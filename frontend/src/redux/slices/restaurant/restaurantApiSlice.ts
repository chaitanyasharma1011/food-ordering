import { ApiResponse } from "@/library/type";
import apiGrabitSlice from "@/services/apiGrabitSlice";

const restaurantApiSlice = apiGrabitSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchRestaurants: build.query<ApiResponse, void>({
      query: () => ({
        url: "/api/restaurants",
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyFetchRestaurantsQuery: useFetchRestaurantsQuery } =
  restaurantApiSlice;
