'use client';

import { useState } from "react";
import { Assignment } from "../interfaces/Assignment";

export default function Home() {

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [feedback, setFeedback] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <main className="flex min-h-screen w-screen">
      <div className="flex h-screen w-screen justify-center align-middle bg-[#1d4d6f]">
        <div className="flex flex-col h-full w-full gap-8 justify-center align-middle">
          <h1 className="text-center text-5xl font-bold font-sans">
            How Cooked Are You For Your Exam?
          </h1>
          <div className="flex h-fit w-full overflow-y-auto bg-white justify-center align-middle
          border-solid border-black border-8">
            <form onSubmit={handleSubmit}>
              
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
  