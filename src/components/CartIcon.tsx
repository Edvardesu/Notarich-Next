"use client";
import { useCartStore } from "@/utils/store";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";

const CartIcon = () => {
  const { data: session, status } = useSession();

  const { totalItems } = useCartStore();

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);

  useEffect(() => {
    useCartStore.persist.rehydrate();
  }, []);
  return (
    <>
      {status === "authenticated" ? (
        <Link href={session?.user.isAdmin ? "/add" : "/cart"}>
          <>
            {session?.user.isAdmin ? (
              <button className="bg-red-500 text-white rounded-md ">
                {/* Add product */}
              </button>
            ) : (
              <span className="">Cart ({totalItems})</span>
            )}
          </>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
};

export default CartIcon;
