"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { data: session, status } = useSession();
  return (
    <>
      {status === "authenticated" ? (
        <>
          {session?.user.isAdmin && <Link href="/orders">Orders</Link>}

          <span className="mx-20 cursor-pointer" onClick={() => signOut()}>
            Logout
          </span>
        </>
      ) : (
        <Link className="mr-20" href="/login">Login</Link>
      )}
    </>
  );
};

export default UserLinks;
