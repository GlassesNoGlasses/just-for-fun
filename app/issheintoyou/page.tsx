'use client'

import { useState } from "react";
import {ISIYChecklist, ISIYChecklistResponses} from "../interfaces/ISIYChecklist";

export default function Home() {

    const defaultChecklist: ISIYChecklist = {
        name: '',
        intoThem: -10,
        eyeContact: false,
        flirty: false,
        dates: false,
        kissed: false,
        Netflixed: false,
        couple: false,
        married: false,
        kids: false,
    }

    const [findOut, setFindOut] = useState<boolean>(false);
    const [checklist, setChecklist] = useState<ISIYChecklist>(defaultChecklist);
    const [submitted, setSubmitted] = useState<boolean>(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    }

    return (
        <main className="h-screen w-screen flex relative z-0">
            <div className="flex flex-col h-full w-full bg-main overflow-y-scroll z-0">
                <div className="flex flex-col gap-8 h-full w-full justify-center align-middle">
                    <h1 className="text-center text-6xl font-mono underline">Is She Into You?</h1>
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
                    <br className="flex w-full h-full" />
                </div>
                {
                    findOut &&
                    <div className="h-fit w-full flex align-middle justify-center 
                    from-main to-pink-500">
                        <div className="flex w-3/4 mx-auto mt-8 bg-white shadow-lg rounded-lg overflow-hidden 
                        border-black border-4 border-solid mb-8">
                            <form className="py-4 px-6 flex flex-col gap-4 w-full"
                                onSubmit={handleSubmit}>
                                <div className="w-full">
                                    <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
                                        POI Name
                                    </label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name" type="text" placeholder="Person Of Interest's Name" required={true}
                                        onChange={(event) => setChecklist(prev => ({ ...prev, name: event.target.value }))} />
                                </div>
                                <div className="w-full">
                                    <label className="block text-gray-700 font-medium mb-2">Are You Into Her?</label>
                                    <div className="flex flex-wrap">
                                        <div className="px-2 w-1/3">
                                            <label htmlFor="yes" className="block text-gray-700 font-medium mb-2">
                                                <input type="radio" id="yes" name="intoThem" value={1} className="mr-2"
                                                    onChange={(event) => setChecklist(prev => ({ ...prev, intoThem: Number(event.target.value) }))}
                                                    required={true}/>Yes
                                            </label>
                                        </div>
                                        <div className="px-2 w-1/3">
                                            <label htmlFor="no" className="block text-gray-700 font-medium mb-2">
                                                <input type="radio" id="no" name="intoThem" value={0} className="mr-2"
                                                    onChange={(event) => setChecklist(prev => ({ ...prev, intoThem: Number(event.target.value) }))} />No
                                            </label>
                                        </div>
                                        <div className="px-2 w-1/3">
                                            <label htmlFor="cant-tell" className="block text-gray-700 font-medium mb-2">
                                                <input type="radio" id="cant-tell" name="intoThem" value={-1} className="mr-2"
                                                    onChange={(event) => setChecklist(prev => ({ ...prev, intoThem: Number(event.target.value) }))} />Can&apos;t Tell
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {
                                    checklist.intoThem > 0 &&
                                    <>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Did She Make Eye Contact Twice or More?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-eyes" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-eyes" name="eye-contact" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, eyeContact: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-eyes" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-eyes" name="eye-contact" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, eyeContact: false }))}
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Is She Flirty With You?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-flirt" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-flirt" name="flirty" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, flirty: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-flirt" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-flirt" name="flirty" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, flirty: false }))}
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Did You Go On Date(s)?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-dates" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-dates" name="dates" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, dates: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-dates" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-dates" name="dates" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, dates: false }))}
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Did You Kiss?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-kiss" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-kiss" name="kissed" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, kissed: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-kiss" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-kiss" name="kissed" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, kissed: false }))}
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Did You Netflix and Chilled, Amazon Primed and Bedtimed, or Study and Got Cuddly?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-netflixed" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-netflixed" name="netflixed" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, Netflixed: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-netflixed" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-netflixed" name="netflixed" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, Netflixed: false }))}
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Are You A Couple?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-couple" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-couple" name="couple" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, couple: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-couple" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-couple" name="couple" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, couple: false }))}
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Are You Married Or Similar?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-married" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-married" name="married" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, married: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-married" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-married" name="married" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, married: false }))} 
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-full">
                                            <label className="block text-gray-700 font-medium mb-2">Have Kids Together?</label>
                                            <div className="flex flex-wrap">
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="yes-kids" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="yes-kids" name="kids" value={1} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, kids: true }))} />Yes
                                                    </label>
                                                </div>
                                                <div className="px-2 w-1/3">
                                                    <label htmlFor="no-kids" className="block text-gray-700 font-medium mb-2">
                                                        <input type="radio" id="no-kids" name="kids" value={0} className="mr-2"
                                                            onChange={() => setChecklist(prev => ({ ...prev, kids: false }))}
                                                            defaultChecked={true}/>No
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                }
                                <div className="flex justify-end">
                                    <button type="submit" className="px-6 py-2 bg-indigo-500 text-white font-semibold rounded-md hover:bg-indigo-600 focus:outline-none">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                }
            </div>
            {
                submitted &&
                <div className="flex h-full w-full absolute bg-black align-bottom justify-center z-10
                animate-fade-down">
                    <div className="flex h-fit w-full flex-col gap-4 align-middle justify-center">
                        <h1 className="text-center text-6xl font-mono underline mt-12">So, Is She Into You?</h1>
                        <h2 className="text-center text-4xl font-mono text-pink-300">Answer: Can&apos;t Really Tell</h2>
                        <p className="text-center text-xl font-mono px-8">{ISIYChecklistResponses(checklist)}</p>
                    </div>
                </div>
            }
        </main>
    )
}
