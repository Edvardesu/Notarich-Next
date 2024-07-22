import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const AuthLayout = (props) => {
  const { children, title, type } = props;
 

  return (
    <div className="min-h-screen flex items-center justify-center bg-login bg-cover bg-center font-jakarta_sans py-20">
      <div className="bg-white shadow-md rounded-lg flex flex-row max-w-4xl w-full overflow-hidden">
        <div className="bg-cover bg-black w-fit">
          <Image
            src="/login1.png"
            alt="Notarich Cafe"
            width={100}
            height={100}
            className="h-fit"
          />
        </div>
        <div className="w-full py-12 px-20">
          <div className="flex flex-row justify-center">
            <Image
              src="/logo-notarich.png"
              alt="Notarich Cafe"
              width={100}
              height={100}
              className="w-16"
            />
            <h2 className="text-xl font-normal text-center text-gray-800 font-bruno_ace mt-4 ml-3">
              Notarich Cafe
            </h2>
          </div>

          <Navigation type={type} />
          {children}

          <div className="mt-4 text-center text-base">
            <p className="text-gray-600">
              Or, continue with{" "}
              <button
                onClick={() => signIn("google")}
                className="text-black underline font-semibold"
              >
                Google
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mt-6">
          Login
        </h2>
        <p className="text-normal mt-5 text-center">
          Don't have an account?{" "}
          <Link href="/register" className="font-semibold text-black underline">
            Create an account
          </Link>
        </p>
      </>
    );
  } else {
    return (
      <>
        <h2 className="text-3xl font-semibold text-center text-gray-800 mt-6">
          Create an account
        </h2>
        <p className="text-normal mt-5 text-center">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-black underline">
            Login
          </Link>
        </p>
      </>
    );
  }
};

export default AuthLayout;
