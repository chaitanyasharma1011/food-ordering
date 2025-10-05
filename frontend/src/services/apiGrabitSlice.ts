// import { APP_SANITY_PROJECT_ID } from "@/library/environment";
import { APP_SERVER } from "@/library/environment";
import {
  fetchBaseQuery,
  createApi,
  // FetchBaseQueryError,
  BaseQueryFn,
  FetchArgs,
} from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

// import { showNotification } from "@/redux/slices/notificationSlice";

const INTERNET_ERROR_MESSAGE = {
  messages: {
    internet: "Make sure you are on a stable internet connection",
  },
  message: "Make sure you are on a stable internet connection",
};

const SERVER_ERROR_MESSAGE = {
  messages: {
    server: "Server Error: Internal server error",
  },
  message: "Server Error: Internal server error",
};

console.log(APP_SERVER);
const baseQuery = fetchBaseQuery({
  baseUrl: `${APP_SERVER}`,
  // credentials: "include",

  prepareHeaders: (headers) => {
    let accessToken = Cookies.get("jwtToken");
    // headers.set("Origin", `http://localhost:3000/`);
    if (accessToken)
      headers.set("Authorization", `Bearer ${accessToken || ""}`);
    return headers;
  },
});

type BaseQueryResponse = unknown;
type BaseQueryError = unknown;

type AuthHandler = BaseQueryFn<
  string | FetchArgs,
  BaseQueryResponse,
  BaseQueryError
>;

const extraAuth = (response: Record<string, any>) => {
  const { error } = response;
  if (
    typeof error === "object" &&
    (error.status === "FETCH_ERROR" || error.originalStatus === 500)
  ) {
    // OFFLINE ERROR MESSAGE
    if (!navigator.onLine) {
      //   api.dispatch(
      //     showNotification({
      //       severity: "error",
      //       message: INTERNET_ERROR_MESSAGE.message,
      //     })
      //   );
      return {
        ...response,
        error: {
          ...response.error,
          parsedErrors: INTERNET_ERROR_MESSAGE,
        },
      };
    }

    // SERVER ERRORS
    // api.dispatch(
    //   showNotification({
    //     severity: "error",
    //     message: SERVER_ERROR_MESSAGE.message,
    //   })
    // );
    return {
      ...response,
      error: {
        ...response.error,
        parsedErrors: SERVER_ERROR_MESSAGE,
      },
    };
  }
  return null;
};

const authHandler: AuthHandler = async (args, api, options = {}) => {
  const response = await baseQuery(args, api, options);
  const { error } = response;

  // SERVER OR FETCH ERROR NOTIFICATION
  // STOP FURTHER CODE EXECUTION
  // RETURN THE ERROR IF ANY
  const errorsTemp = extraAuth(response);
  if (errorsTemp) return errorsTemp;
  if (error) {
    //   const parsedErrors = error ? getOnFormError(error) : null;
    return {
      ...response,
      error: {
        ...response.error,
        //   ...(parsedErrors && { parsedErrors }),
      },
    };
  }

  // DATA RESPONSE
  return response;
};

const apiGrabitSlice = createApi({
  reducerPath: "apiGrabitSlice",
  baseQuery: authHandler,
  endpoints: () => ({}),
});

export const {
  reducerPath: apiReducerPath,
  middleware: apiMiddleware,
  reducer: apiReducer,
} = apiGrabitSlice;

export default apiGrabitSlice;
