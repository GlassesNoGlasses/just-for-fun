'use client';

import { useEffect, useState } from "react";
import SlotsProps from "./SlotsProps";
import { GetIcons, SlotReturn } from "@/app/constants/SlotManager";
import { playAudio } from "@/app/constants/SoundController";

export const Slots = ({
    title,
    playable = true,
    subtitle = "",
    resultsCallback,
    exitCallback,
}: SlotsProps) => {

    const defaultIcons = ["😭", "📃", "🙏"];

    const [spinnerOne, setSpinnerOne] = useState<string>(defaultIcons[0]);
    const [spinnerTwo, setSpinnerTwo] = useState<string>(defaultIcons[1]);
    const [spinnerThree, setSpinnerThree] = useState<string>(defaultIcons[2]);
    const [results, setResults] = useState<SlotReturn>([spinnerOne, spinnerTwo, spinnerThree]);
    const [play, setPlay] = useState<boolean>(false);
    const [numSpins, setNumSpins] = useState<number>(0);

    const setIntervalX = (callback: () => void, delay: number, repetitions: number, endCallback: () => void) => {
        let x = 0;
        let intervalID = setInterval(() => {
            callback();
            if (++x >= repetitions) {
                clearInterval(intervalID);
                endCallback();
            }
        }, delay);
    }

    const spin = () => {
        playAudio("slots");
        setPlay(true);
        
        const getSlotIcons = () => {
            const icons = GetIcons();
            setSpinnerOne(icons[0]);
            setSpinnerTwo(icons[1]);
            setSpinnerThree(icons[2]);
        }

        const endCallback = () => {
            setNumSpins(prev => prev + 1);
            setPlay(false);
            setResults([spinnerOne, spinnerTwo, spinnerThree]);
        }

        setIntervalX(getSlotIcons, 100, 20, endCallback);
    }

    useEffect(() => {
        if (!play && numSpins > 0) {
            resultsCallback([spinnerOne, spinnerTwo, spinnerThree]);
        }
    }, [results])

    const cashOut = () => {
        setNumSpins(0);
        exitCallback();
    }

  return (
    <div className="flex h-full w-full bg-yellow-100 border-black border-double border-4 rounded-lg align-middle justify-center">
        <audio src="/sounds/casino.mp3" id="slots"/>
        <div className="flex flex-col gap-8 items-center justify-center h-full w-full">
            <span className="text-center text-black font-black text-4xl">
            {title}
            </span>
            <span className="text-center text-black font-black text-2xl">
            {subtitle}
            </span>
            <div className="flex flex-row gap-12 h-fit w-full justify-center align-middle">
                <span className={`text-7xl border-black border-4 border-solid ${play && "animate-flip-up animate-infinite animate-duration-75"}`}>
                    {spinnerOne}
                </span>
                <span className={`text-7xl border-black border-4 border-solid ${play && "animate-flip-up animate-infinite animate-duration-75 animate-delay-75"}`}>
                    {spinnerTwo}
                </span>
                <span className={`text-7xl border-black border-4 border-solid ${play && "animate-flip-up animate-infinite animate-duration-75 animate-delay-100"}`}>
                    {spinnerThree}
                </span>
            </div>
            {
                playable ?
                <button onClick={!play ? spin : () => alert("Spinning! -10 Aura")}>
                    <span className="text-7xl text-center hover:brightness-125">
                        🎰
                    </span>
                </button>
                :
                <button onClick={cashOut}>
                    <span className="text-7xl text-center hover:brightness-125">
                        🚫
                    </span>
                </button>
            }
        </div>
    </div>
  )
}

