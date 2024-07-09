'use client'

import { useState } from "react";

export default function Home() {

    const [findOut, setFindOut] = useState<boolean>(false);

    return (
        <main className="h-screen w-screen">
            <div className="flex flex-col h-full w-full bg-main overflow-auto">
                <div className="flex flex-col gap-8 h-full w-full justify-center align-middle">
                    <h1 className="text-center text-6xl font-mono underline">Is She Into You?</h1>
                    <a href="https://www.youtube.com/@CasuallyExplained" target="_blank">
                        <p className="text-center text-xl font-mono hover:underline">Inspired By Casually Explained</p>
                    </a>
                    <h2 className="text-center text-4xl font-mono font-bold mt-20 
                    hover:cursor-pointer hover:underline"
                    onClick={() => setFindOut(prev => !prev)}>
                        Find Out &#8595;
                    </h2>
                </div>
            </div>
        </main>
    )
}
