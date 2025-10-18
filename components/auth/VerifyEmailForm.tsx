"use client";

import { verifyEmailToken } from "@/actions/auth/verify-token-action";
import { VerifyEmail } from "@/src/schemas/auth";
import { ActionResponse } from "@/src/types";
import { PinInput, PinInputField } from "@chakra-ui/pin-input";
import { useRouter } from "next/navigation";
import { startTransition, useActionState, useEffect, useState } from "react";
import { toast } from "react-toastify";

const initialState: ActionResponse<VerifyEmail> = { success: "" };

export default function VerifyEmailForm() {
  const [token, setToken] = useState("");
  const [isComplete, setIsComplete] = useState(false);
  const router = useRouter();

  const verifyEmailWithToken = verifyEmailToken.bind(null, token);
  const [state, action] = useActionState(verifyEmailWithToken, initialState);

  useEffect(() => {
    if (isComplete) {
      startTransition(() => {
        action();
      });
    }
  }, [isComplete]);

  useEffect(() => {
    if (state.laravelErr) {
      state.laravelErr.map((err) => toast.error(err));
    }
    if (state.success) {
      toast.success(state.success);
      router.push("/auth/login");
    }
  }, [state]);

  const handleChange = (token: string) => {
    setToken(token);
    setIsComplete(false);
  };

  const handleChangeTokenComplete = () => setIsComplete(true);

  return (
    <>
      <div>
        <div className="flex justify-center gap-5 my-10">
          <PinInput value={token} onChange={handleChange} onComplete={handleChangeTokenComplete}>
            <PinInputField className="h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center" />
            <PinInputField className="h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center" />
            <PinInputField className="h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center" />
            <PinInputField className="h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center" />
            <PinInputField className="h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center" />
            <PinInputField className="h-10 w-10 border border-gray-300 placeholder-white shadow rounded-lg text-center" />
          </PinInput>
        </div>
      </div>
    </>
  );
}
