"use client";

import { PinInput, PinInputField } from "@chakra-ui/pin-input";

export default function VerifyEmail() {
  return (
    <>
      <div>
        <div className="flex justify-center gap-5 my-10">
          <PinInput value={""} onChange={() => {}} onComplete={() => {}}>
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
