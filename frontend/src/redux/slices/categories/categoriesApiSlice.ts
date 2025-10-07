import { ApiResponse } from "@/library/type";
import apiGrabitSlice from "@/services/apiGrabitSlice";

const categoriesApiSlice = apiGrabitSlice.injectEndpoints({
  endpoints: (build) => ({
    fetchCategories: build.query<ApiResponse, { id: string }>({
      query: ({ id }) => ({
        url: `/api/${id}/category`,
        method: "GET",
      }),
    }),
  }),
});

export const { useLazyFetchCategoriesQuery: useFetchCategories } =
  categoriesApiSlice;
