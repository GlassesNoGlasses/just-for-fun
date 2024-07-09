'use client'

import { useState } from "react";
import ISIYChecklist from "../interfaces/ISIYChecklist";

export default function Home() {

    const defaultChecklist: ISIYChecklist = {
        name: '',
        intoThem: 7,
    }

    const [findOut, setFindOut] = useState<boolean>(false);
    const [checklist, setChecklist] = useState<ISIYChecklist>(defaultChecklist);
    const [intoThemFeedback, setIntoThemFeedback] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(checklist)
        console.log('submitted');
    }

    return (
        <main className="h-screen w-screen">
            <div className="flex flex-col h-full w-full bg-main overflow-y-scroll">
                <div className="flex flex-col gap-8 h-full w-full justify-center align-middle">
                    <h1 className="text-center text-6xl font-mono underline">Is He/She Into You?</h1>
                    <a href="https://www.youtube.com/@CasuallyExplained" target="_blank">
                        <p className="text-center text-xl font-mono hover:underline">Inspired By Casually Explained</p>
                    </a>
                    <div className="flex flex-row gap-4 h-fit w-full align-middle justify-center mt-20">
                        <h2 className="text-center text-4xl font-mono font-bold 
                        hover:cursor-pointer hover:underline"
                            onClick={() => setFindOut(prev => !prev)}>
                            Take The Test
                        </h2>
                        <span className="flex animate-bounce text-5xl hover:cursor-pointer"
                            onClick={() => setFindOut(prev => !prev)}>
                            &#8595;
                        </span>
                    </div>
                </div>
                {
                    findOut &&
                    <div className="h-fit w-full flex align-middle justify-center 
                    from-main to-pink-500">
                        <div className="flex w-3/4 mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden 
                        border-black border-4 border-solid">
                            <form className="py-4 px-6 flex flex-col gap-4 w-full">
                                <div className="w-full">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                        POI Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name" type="text" placeholder="Person Of Interest's Name" required={true}
                                        onChange={(event) => setChecklist(prev => ({...prev, name: event.target.value}))}/>
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 font-medium mb-2">Are You Into Them?</label>
                                    <div className="flex flex-wrap">
                                        <div className="px-2 w-1/3">
                                            <label htmlFor="yes" className="block text-gray-700 font-medium mb-2">
                                                <input type="radio" id="yes" name="intoThem" value={1} className="mr-2"
                                                onChange={(event) => setChecklist(prev => ({...prev, intoThem: event.target.valueAsNumber}))}/>Yes
                                            </label>
                                        </div>
                                        <div className="px-2 w-1/3">
                                            <label htmlFor="no" className="block text-gray-700 font-medium mb-2">
                                                <input type="radio" id="no" name="intoThem" value={0} className="mr-2"
                                                onChange={(event) => setChecklist(prev => ({...prev, intoThem: event.target.valueAsNumber}))}/>No
                                            </label>
                                        </div>
                                        <div className="px-2 w-1/3">
                                            <label htmlFor="cant-tell" className="block text-gray-700 font-medium mb-2">
                                                <input type="radio" id="cant-tell" name="intoThem" value={-1} className="mr-2"
                                                onChange={(event) => setChecklist(prev => ({...prev, intoThem: event.target.valueAsNumber}))}/>Can't Tell
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="date">
                                        Date
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="date" type="date" placeholder="Select a date" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="time">
                                        Time
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="time" type="time" placeholder="Select a time" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="service">
                                        Service
                                    </label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="service" name="service">
                                        <option value="">Select a service</option>
                                        <option value="haircut">Haircut</option>
                                        <option value="coloring">Coloring</option>
                                        <option value="styling">Styling</option>
                                        <option value="facial">Facial</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
        </main>
    )
}
