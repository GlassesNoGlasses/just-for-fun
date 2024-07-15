'use client';

import { useEffect, useState } from "react";
import { Job } from "../interfaces/Job";
import { CreateJob } from "../constants/Jobs";
import { ItemList } from "../components/ItemList/ItemList";

export default function Home() {

    const numJobs = 10;
    
    const [jobs, setJobs] = useState<Job[]>([]);
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
                <div className="flex bg-white flex-row w-3/4 h-5/6 overflow-auto">
                    <ItemList items={jobs} onItemClick={(job) => setFocusedJob(job as Job)} />
                    <span>HELLO</span>
                </div>
            </div>
        </main>
    );
}
