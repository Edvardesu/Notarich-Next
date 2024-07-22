"use client";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import AuthLayout from "./AuthLayouts";
import FormLogin from "./FormLogin";

const LoginPage = () => {
  const { data, status } = useSession();
  const route = useRouter();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  if (status === "authenticated") {
    route.push("/");
    console.log(status);
  }
  return (
    <AuthLayout title="Login" type="login">
      <FormLogin />
    </AuthLayout>
  );
};

export default LoginPage;
