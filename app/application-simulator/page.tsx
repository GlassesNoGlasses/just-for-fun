'use client';

import { useEffect, useState } from "react";
import { Job } from "../interfaces/Job";
import { CreateJob } from "../constants/Jobs";
import { Carousel } from "../components/carousel/Carousel";
import Image from "next/image";
import { Slots } from "../components/slots/Slots";
import { playAudio } from "../constants/SoundController";

export default function Home() {

    const numJobs = 10;

    const [currentJob, setCurrentJob] = useState<Job>(CreateJob());
    const [startSimulating, setStartSimulating] = useState<boolean>(false);
    const [interview, setInterview] = useState<boolean>(false);
    const [interviewExists, setInterviewExists] = useState<boolean>(false);
    const [interviewCount, setInterviewCount] = useState<number>(1);

    const handleTitleEnd = () => {
        setStartSimulating(true);
        playAudio("gambling!");
    }

    const createNewJob = () => {
        setCurrentJob(CreateJob());
        playAudio("dangit");
    }

    const handleSlotsCallback = (result: [string, string, string]) => {
        console.log(result);
        if (result[0] === result[1] && result[0] === result[2]) {
            setInterviewCount(prev => prev + 1);
            return;
        }

        setInterviewExists(false);
    }

    const handleCashOut = () => {
        setInterview(false);
        setInterviewCount(1);
        createNewJob();
    }
    
    const startSlots = () => {
        setInterview(true);
        setInterviewExists(true);
        playAudio("gambling!");
    }

    return (
        <main className="w-screen h-screen">
            <div className="flex flex-row w-full h-full bg-main justify-center items-center overflow-auto">
                <audio src="/sounds/gamble-gamble.mp3" id="gambling!"/>
                <audio src="/sounds/dangit.mp3" id="dangit"/>
                {
                    !startSimulating ?
                    TitleScreen(() => handleTitleEnd()) :
                    <>
                        <div className="flex flex-col gap-2 bg-white w-3/4 h-5/6 overflow-auto border-sky-600 border-4 rounded-md">     
                            <div className="flex flex-row h-fit w-full align-middle items-center justify-center">
                                <Image
                                alt="Job"
                                height={200}
                                width={200}
                                src={'/images/company.jpg'}
                                className="rounded-full pl-2"
                                />
                                <h1 className="text-center text-black text-5xl font-bold font-serif">{currentJob.company}</h1>
                            </div>
                            <div className="flex align-middle justify-center h-fit w-full -mt-8">
                                <span className="w-11/12 border-t-2 border-black"/>
                            </div>
                            <span className="text-center text-black font-black text-4xl">
                                {currentJob.title}
                            </span>
                            <div className="flex flex-col items-center align-middle justify-center w-full text-xl">
                                <div className="flex flex-row h-fit w-full justify-center">
                                    <p className="text-gray-400 font-bold">Location:</p>
                                    <p className="text-black pl-2">{currentJob.location}</p>
                                </div>
                                <div className="flex flex-row h-fit w-full justify-center">
                                    <p className="text-gray-400 font-bold">Posted:</p>
                                    <p className="text-black pl-2">{currentJob.posted}</p>
                                </div>
                                <div className="flex flex-row h-fit w-full justify-center">
                                    <p className="text-gray-400 font-bold">Type:</p>
                                    <p className="text-black pl-2">{currentJob.jobType}</p>
                                </div>
                                <div className="flex flex-row h-fit w-full justify-center">
                                    <p className="text-gray-400 font-bold">Applicants:</p>
                                    <p className="text-black pl-2">{Math.min(currentJob.applicants, 100)}+</p>
                                </div>
                                <div className="flex flex-row h-fit w-full justify-center">
                                    <p className="text-gray-400 font-bold">Salary:</p>
                                    <p className="text-black pl-2">${currentJob.minSalary} — ${currentJob.maxSalary}</p>
                                </div>
                            </div>
                            <span className="pl-12 text-left text-2xl text-black font-semibold">About The Role:</span>
                            <span className="mx-12 text-left text-lg text-black font-serif overflow-y-auto border-black border-2 min-h-28">{currentJob.description}</span>
                            <span className="pl-12 text-left text-2xl text-black font-semibold">Required Qualifications:</span>
                            <ul className="pl-16 text-left text-lg text-black font-serif list-disc">
                                {currentJob.qualifications.map((qualification, index) => {
                                    return <li key={index}>{qualification}</li>
                                })}
                            </ul>
                            <span className="pl-12 text-left text-2xl text-black font-semibold">Desired Qualifications:</span>
                            <ul className="pl-16 text-left text-lg text-black font-serif list-disc pb-4">
                                {currentJob.desiredQualifications.map((qualification, index) => {
                                    return <li key={index}>{qualification}</li>
                                })}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-8 w-1/6 h-fit align-middle justify-center">
                            <button className="hover:bg-pink-500 mx-16 rounded-md active:animate-jump active:animate-duration-500"
                            onClick={startSlots}>
                                <span className="text-8xl hover:brightness-125">❤️</span>
                            </button>
                            <button className="hover:bg-slate-400 mx-16 rounded-md active:animate-duration-2000 active:animate-spin"
                            onClick={createNewJob}>
                                <span className="text-8xl hover:brightness-125">🔄</span>
                            </button>
                        </div>
                    </>
                }
                {
                    interview &&
                    <div className="flex absolute h-3/4 w-3/4 z-20 animate-fade-down justify-center align-middle">
                        <Slots
                        title={
                            interviewCount <= 1 ? "You Got an Interview! Hit 3 of Anything to (potentially) Get a Job!"
                            : "You Got Another Interview! Hit 3 of Anything to (potentially) Get a Job!"
                        }
                        subtitle={`Interivew: ${interviewCount}`}
                        resultsCallback={handleSlotsCallback}
                        exitCallback={handleCashOut}
                        playable={interviewExists}/>
                    </div>
                }
            </div>
        </main>
    );
}


const TitleScreen = (callback: () => void): JSX.Element => {
    return (
        <div className="flex flex-col gap-12 h-screen w-screen z-10 relative align-middle justify-center bg-main overflow-y-scroll">
            <Carousel>
                <CarouselElement>
                    <h1 className="text-center text-6xl font-mono underline animate-fade-down">
                        Pst... Wanna Hear a Joke?
                    </h1>
                </CarouselElement>
                <CarouselElement>
                    <h2 className="text-center text-6xl font-mono animate-fade-up">The Tech Job Market 🤣😂😭🥲</h2>
                </CarouselElement>
                <CarouselElement>
                    <h2 className="text-center text-6xl font-mono animate-fade-up">I&apos;m not lying...</h2>
                    <Image
                    alt="Layoffs"
                    src="/images/layoffs-lmao.png"
                    height={750}
                    width={750}
                    className="animate-jump-in animate-delay-500 animate-duration-500"
                    />
                </CarouselElement>
                <CarouselElement>
                    <h2 className="text-center text-6xl font-mono underline">No, but seriously</h2>
                    <p className="text-center text-xl font-mono">
                        For the average CS student, landing an internship feels harder than ever. Shotgunning 100+ applications and getting 1-2 interviews is the norm now. 
                        Not very good odds, huh? 🥲
                    </p>
                </CarouselElement>
                <CarouselElement>
                    <h2 className="text-center text-8xl font-mono animate-fade-right">BUT What if I told you</h2>
                </CarouselElement>
                <CarouselElement>
                    <h2 className="text-center text-8xl font-mono animate-fade-left">There&apos;s a BETTER way?</h2>
                </CarouselElement>
                <CarouselElement>
                    <h2 className="text-center text-9xl font-mono animate-fade-down">...</h2>
                </CarouselElement>
                <CarouselElement>
                    <h2 className="text-center text-8xl font-mono underline animate-fade-up">Click Now!</h2>
                    <div className="flex flex-row align-middle items-center justify-center gap-8">
                        <span className="text-left text-6xl animate-bounce">&#8594;</span>
                        <button onClick={callback}
                        className="flex h-fit p-2 w-fit border-sky-700 border-4 rounded-md bg-sky-500 hover:bg-sky-400 text-3xl">A Better Way
                        </button>
                        <span className="text-right text-6xl animate-bounce">&#8592;</span>
                    </div>
                </CarouselElement>
            </Carousel>
        </div>
    )
}

const CarouselElement = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
    return (
        <div className="flex flex-col gap-8 h-full w-full align-middle justify-center items-center">
            {children}
        </div>
    )
}
