"use client"

import { Button } from "@/components/ui/button";

const Page = () => {
  return (
    <div className="w-[100dvw] h-[100dvh] flex flex-col items-center justify-center">
      <h1 className="text-6xl font-bold text-center w-[75%] block mx-auto text-white">Find Your Perfect Match: AI-Powered Job Matching</h1>
      <Button className="mt-10 block mx-auto cursor-pointer" size="lg" onClick={() => window.location.href = "/discuss"}>Get Started</Button>
    </div>
  );
}

export default Page;
