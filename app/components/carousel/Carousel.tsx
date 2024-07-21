'use client'

import { use, useEffect, useState } from 'react';
import CarouselProps from './CarouselProps'

export const Carousel = ({
    children,
    infinite,
    autoPlay,
    interval = 2000
}: CarouselProps) => {

    const numElements = children.length;
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const nextElement = () => {
        infinite ? setActiveIndex((activeIndex + 1) % numElements) : setActiveIndex(Math.min(activeIndex + 1, numElements - 1));
    };

    const prevElement = () => {
        infinite ? setActiveIndex((activeIndex - 1 + numElements) % numElements) : setActiveIndex(Math.max(activeIndex - 1, 0));
    };

    const createAutoPlay = (): NodeJS.Timeout => {
        return setInterval(() => {
            nextElement();
        }, interval);
    }

    useEffect(() => {
        let intervalId = undefined;
        if (autoPlay) {
            clearInterval(createAutoPlay());
            intervalId = createAutoPlay();
        }
        return () => clearInterval(intervalId);
    }, [activeIndex])

  return numElements <= 0 ? <></> :  (
    <div className='flex h-full w-full bg-inherit'>
        <div className='flex flex-row h-full w-full items-center justify-evenly align-middle'>
            <button onClick={prevElement} className='h-fit w-fit flex animate-wiggle-more animate-infinite'>
                <span className={`pl-4 text-left text-5xl ${!infinite && activeIndex <= 0 && 'text-black'}`}>&#8592;</span>
            </button>
            <div className='h-fit w-5/6'>
                <CarouselElement>
                    {children[activeIndex]}
                </CarouselElement>
            </div>
            <button onClick={nextElement} className='h-fit w-fit flex animate-wiggle-more animate-infinite hover:bg-current/50'>
                <span className={`pr-4 text-right text-5xl  ${!infinite && activeIndex === numElements - 1 && 'text-black'}`}>&#8594;</span>
            </button>
        </div>
    </div>
  )
}

const CarouselElement = ({children}: {children: JSX.Element}) => {
    return (
        <div className='h-full w-full'>
            {children}
        </div>
    )
}

