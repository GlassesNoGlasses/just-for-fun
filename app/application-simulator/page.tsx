'use client';

import { useEffect, useState } from "react";
import { Job } from "../interfaces/Job";
import { CreateJob } from "../constants/Jobs";
import { Carousel } from "../components/carousel/Carousel";
import Image from "next/image";

export default function Home() {

    const numJobs = 10;

    const [jobs, setJobs] = useState<Job[]>([]);
    const [startSimulating, setStartSimulating] = useState<boolean>(false);
    const [focusedJob, setFocusedJob] = useState<Job | null>(null);

    const createJobs = (numJobs: number): Job[] => {
        const jobs: Job[] = [];
        for (let i = 0; i < numJobs; i++) {
            jobs.push(CreateJob())
        }
        return jobs
    }

    // create all jobs and store them in state
    useEffect(() => {
        setJobs(createJobs(numJobs))
    }, [])

    return (
        <main className="w-screen h-screen">
            <div className="flex flex-col w-full h-full bg-main justify-center items-center">
                {
                    !startSimulating ?
                        <TitleScreen /> :
                        <div className="flex bg-white flex-row w-3/4 h-5/6 overflow-auto">
                            <span>HELLO</span>
                        </div>
                }
            </div>
        </main>
    );
}


const TitleScreen = (): JSX.Element => {
    return (
        <div className="flex flex-col gap-12 h-screen w-screen z-10 relative align-middle justify-center bg-main overflow-y-scroll">
            <Carousel>
                <CarouselElement>
                    <h1 className="text-center text-6xl font-mono underline animate-fade-down">
                        Wanna Hear a Joke?
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
                    width={750}
                    height={750}
                    className="animate-jump-in animate-delay-500 animate-duration-500"
                    />
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
