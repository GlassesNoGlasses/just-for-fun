'use client';

import { useState } from "react";
import { Assignment } from "../interfaces/Assignment";

export default function Home() {

  const currentDate = new Date();
  const currentDateFormat = DatePickerFormat(currentDate);

  const defaultAssignment: Assignment = {
    id: 0,
    title: '',
    releasedDate: new Date(),
    dueDate: new Date(),
    maxGrade: 0,
    userGrade: 0,
    weight: 0,
  };

  // states for assignment and feedback
  const [assignment, setAssignment] = useState<Assignment>(defaultAssignment);
  const [releasedDate, setReleasedDate] = useState<string>(currentDateFormat);
  const [dueDate, setDueDate] = useState<string>(currentDateFormat);
  const [feedback, setFeedback] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setAssignment({
        ...assignment,
        releasedDate: new Date(releasedDate),
        dueDate: new Date(dueDate),
      });
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex min-h-screen w-screen">
      <div className="flex h-screen w-screen justify-center align-middle bg-[#1d4d6f]">
        <div className="flex flex-col h-full w-full gap-8 justify-center align-middle">
          <h1 className="text-center text-5xl font-bold font-sans mt-4">
            How Cooked Are You?
          </h1>
          <div className="flex h-full w-full justify-center align-middle">
            <div className="flex h-fit w-3/4 justify-center align-middle">
              <form className="flex h-full w-full flex-col" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 h-fit w-full bg-white border-solid border-gray-800 border-4 rounded-lg">
                  <h2 className="text-3xl font-semibold text-sky-700 text-center">
                    For Student Procrasination Satisfaction
                  </h2>
                  <div className="flex items-center">
                    <label htmlFor="name" className="text-sm font-semibold text-gray-700">
                      Assignment Name: 
                    </label>
                    <input type="text" name="name" id="name" className="w-full text-black px-1 mx-4 border-2 border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"/>
                  </div>
                  <div className="flex flex-row justify-evenly align-middle">
                    <div className="flex items-center">
                      <label htmlFor="released" className="text-sm font-semibold text-gray-700">
                        Released Date: 
                      </label>
                      <input type="date" id="released" name="released" value={currentDateFormat} max={releasedDate}
                      className="text-black mx-2 border-2 border-solid border-sky-700 rounded-md"
                      onChange={(event) => setReleasedDate(event.target.value)}/>
                    </div>
                    <div className="flex items-center">
                      <label htmlFor="due" className="text-sm font-semibold text-gray-700">
                        Due Date:
                      </label>
                      <input type="date" id="due" name="due" value={currentDateFormat} min={dueDate}
                      className="text-black mx-2 border-2 border-solid border-sky-700 rounded-md"
                      onChange={(event) => setDueDate(event.target.value)}/>
                    </div>
                  </div>
                  <div className="flex flex-row align-middle justify-evenly pb-4">
                    <div className="flex flex-row gap-4">
                      <label htmlFor="complete" className="text-sm font-semibold text-gray-700">
                        % Completed: 
                      </label>
                      <input type="text" name="complete" id="complete"
                      className="w-full text-black px-1 mx-4 border-2 border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                      placeholder="Don't Lie..."/>
                    </div>
                    <div className="flex flex-row gap-4">
                      <label htmlFor="actual-completed" className="text-sm font-semibold text-gray-700">
                        Actual % Completed: 
                      </label>
                      <input type="text" name="actual-completed" id="actual-completed"
                      className="w-full text-black px-1 mx-4 border-2 border-gray-300 rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                      placeholder="Ok, really don't lie..."/>
                    </div>
                  </div>
                </div>
                <button type="submit"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg
                text-sm sm:w-auto mt-4 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

const DatePickerFormat = (date: Date) => {
  return date.toISOString().split('T')[0];
};
