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
    fetchRestaurant: build.query<ApiResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/api/restaurants/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useLazyFetchRestaurantsQuery: useFetchRestaurantsQuery,
  useLazyFetchRestaurantQuery: useFetchRestaurantQuery,
} = restaurantApiSlice;
