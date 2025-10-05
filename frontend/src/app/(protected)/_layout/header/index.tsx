"use client";
import { useLazyUserInfo } from "@/redux/slices/user/userApiSlice";
import Desktop from "./desktop";
import Mobile from "./mobile";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userStateAction } from "@/redux/slices/user/userSlice";
import { showNotification } from "@/redux/slices/notification/notificationSlice";
// https://images.pexels.com/photos/568370/pexels-photo-568370.jpeg
export default function Header() {
  const dispatch = useDispatch();
  const [fetchUser, fetchedUser] = useLazyUserInfo();

  useEffect(() => {
    fetchUser(undefined);
  }, []);

  useEffect(() => {
    const { data, error } = fetchedUser;
    if (data) {
      dispatch(
        showNotification({
          severity: "success",
          message: data?.message,
        })
      );
      dispatch(userStateAction({ authorised: true, user: { ...data?.data } }));
    }
  }, [fetchedUser]);

  return (
    <>
      <Desktop />
      <Mobile />
    </>
  );
}
