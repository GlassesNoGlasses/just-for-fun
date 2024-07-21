'use client';

import { useEffect, useState } from "react";
import SlotsProps from "./SlotsProps";
import { GetIcons } from "@/app/constants/SlotManager";

export const Slots = ({
    title,
    subtitle = "",
    callback,
}: SlotsProps) => {

    const [spinnerOne, setSpinnerOne] = useState<string>("😭");
    const [spinnerTwo, setSpinnerTwo] = useState<string>("📃");
    const [spinnerThree, setSpinnerThree] = useState<string>("🙏");
    const [play, setPlay] = useState<boolean>(false);
    const [numSpins, setNumSpins] = useState<number>(0);

    const setIntervalX = (callback: () => void, delay: number, repetitions: number) => {
        let x = 0;
        let intervalID = setInterval(() => {
            callback();
            if (++x >= repetitions) {
                clearInterval(intervalID);
            }
        }, delay);
    }

    const spin = () => {
        setPlay(true);
        const getSlotIcons = () => {
            const icons = GetIcons();
            setSpinnerOne(icons[0]);
            setSpinnerTwo(icons[1]);
            setSpinnerThree(icons[2]);
        }

        setIntervalX(getSlotIcons, 100, 15);
        setNumSpins(numSpins + 1);
        setPlay(false);
    }

    useEffect(() => {
        if (numSpins > 0)
            callback([spinnerOne, spinnerTwo, spinnerThree]);
    }, [numSpins])

  return (
    <div className="flex h-full w-full bg-yellow-100 border-black border-double border-4 rounded-lg align-middle justify-center">
        <audio id="slots"/>
        <div className="flex flex-col gap-8 items-center justify-center h-full w-full">
            <span className="text-center text-black font-black text-4xl">
            {title}
            </span>
            <span className="text-center text-black font-black text-2xl">
            {subtitle}
            </span>
            <div className="flex flex-row gap-12 h-fit w-full justify-center align-middle">
                <span className={`text-7xl ${play && "animate-flip-up animate-infinite animate-duration-75"}`}>
                    {spinnerOne}
                </span>
                <span className={`text-7xl ${play && "animate-flip-up animate-infinite animate-duration-75 animate-delay-75"}`}>
                    {spinnerTwo}
                </span>
                <span className={`text-7xl ${play && "animate-flip-up animate-infinite animate-duration-75 animate-delay-100"}`}>
                    {spinnerThree}
                </span>
            </div>
            <button onClick={!play ? spin : () => alert("Spinning!")}>
                <span className="text-7xl text-center">
                    🎰
                </span>
            </button>
        </div>
    </div>
  )
}

