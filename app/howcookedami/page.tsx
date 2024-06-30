'use client';

import { useState } from "react";
import { Assignment } from "../interfaces/Assignment";
import { TextInput } from "../components/text-input/TextInput";
import Course from "../interfaces/Course";

export default function Home() {

  const defaultCourse: Course = {
    name: '',
    passingGrade: 50,
    assignments: []
  }

  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [course, setCourse] = useState<Course>(defaultCourse);
  const [feedback, setFeedback] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      
    } catch (error) {
      
    }
  }

  return (
    <main className="flex min-h-screen w-screen">
      <div className="flex h-screen w-screen justify-center align-middle bg-[#1d4d6f]">
        <div className="flex flex-col h-full w-full gap-8 justify-center align-middle">
          <h1 className="text-center text-5xl font-bold font-sans">
            How Cooked Are You For Your Exam?
          </h1>
          <div className="flex h-fit w-full justify-center align-middle">
            <form onSubmit={handleSubmit} className="flex flex-col h-fit overflow-y-auto w-3/4
            bg-white border-solid border-black border-8 gap-4">
              {/* Course Name */}
              <TextInput title="Course Name" placeholder="Imagine Forgetting Your Course Name too..."/>

              {/* Grade Schematics */}
              <TextInput title="Passing Grade" placeholder="50 = 50%"/>
                
              {/* Assignments */}
              {assignments.map((assignment, index) => (
              <>
                <div key={index} className="flex flex-row h-fit w-full gap-4">
                  <TextInput title={assignment.title} placeholder="Assignment Name"/>
                  <TextInput title="Your Grade" placeholder="Your Grade"/>
                  <TextInput title="Max Grade" placeholder="Max Grade"/>
                  <TextInput title="Weight" placeholder="Weight"/>
                </div>
                  <button className="flex align-middle justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                  -
                </button>
              </>
              ))}

              {/* Add Assignment */}
              <div className="flex flex-row align-middle w-full h-fit">
                <p className="text-black text-xl text-center flex w-fit">
                  Assignments
                </p>
                <button className="flex align-middle justify-center w-10 h-10 bg-blue-500 text-white rounded-full">
                  +
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
  