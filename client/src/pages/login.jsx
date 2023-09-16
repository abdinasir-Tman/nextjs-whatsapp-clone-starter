import Image from "next/image";
import React from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { firebaseAuth } from "@/utils/FirebaseConfig";
import axios from "axios";
import { CHECK_USER_ROUTE } from "@/utils/ApiRoutes";
import { useRouter } from "next/router";
function login() {
  const router = useRouter();
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    const {
      user: { displayName: name, email, photoURL: profileImage },
    } = await signInWithPopup(firebaseAuth, provider);
    try {
      if (email) {
        const { data } = await axios.post(CHECK_USER_ROUTE, { email });
        if (!data.status) {
          router.push("/onboarding");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center bg-panel-header-background h-screen w-screen flex-col gap-6">
      <div className="flex justify-center gap-2 text-white items-center">
        <Image src="/whatsapp.gif" height={300} width={300} />
        <span className="text-7xl">Whatsapp</span>
      </div>
      <button
        className="flex justify-center items-center gap-7 bg-search-input-container-background p-5 rounded-md"
        onClick={handleLogin}
      >
        <FcGoogle className="text-4xl text-white" />
        <span className="text-white text-2xl">Sign with Google</span>
      </button>
    </div>
  );
}

export default login;
