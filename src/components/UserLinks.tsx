"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          {session?.user.isAdmin && (
            <>
              <Link href="/orders" className={`hover:text-yellow-300 `}>
                Orders
              </Link>
              <Link href="/bookings" className={`hover:text-yellow-300 `}>
                Bookings
              </Link>
            </>
          )}

          <span className=" cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </>
      ) : (
        <Link className="" href="/login">
          Login
        </Link>
      )}
    </>
  );
};

export default UserLinks;
