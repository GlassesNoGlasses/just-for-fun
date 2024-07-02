'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const pedroGif: string = "/gif/PEDRO.gif";

export default function Home() {

    const [pedro, setPedro] = useState<string>("/images/raccoon.jpg");
    const [fedStatus, setFedStatus] = useState<number>(0);
    const [noStyle, setNoStyle] = useState<string>('opacity-100');
    const [pedroAudio, setPedroAudio] = useState<string>('');

    const handlePedro = (status: number) => {
        setFedStatus(status);
        const audio = document.getElementById('pedro-audio') as HTMLAudioElement;

        switch (status) {
            case 1:
                setPedro(pedroGif);
                setPedroAudio('/sounds/pedro-pedro-pedro.mp4');
                break;
            case -1:
                setPedro("/gif/raccoon-sad.gif");
                setNoStyle('opacity-50');
                setPedroAudio('/sounds/sad-violin.mp4');
                break;
            case -2:
                setNoStyle('opacity-25');
                break;
            case -3:
                setNoStyle('hidden invisible');
                break;
            default:
                break
        }
    }

    useEffect(() => {
        const audio = document.getElementById('pedro-audio') as HTMLAudioElement;
        audio.play();
    }, [pedroAudio])

  return (
    <main className="flex h-screen w-screen">
        <div className="flex h-full w-full justify-center align-middle bg-black overflow-y-auto">
            <div className="flex flex-col h-full w-full justify-center align-middle items-center gap-12 overflow-y-auto">
                <audio className='hidden invisble' id="pedro-audio" loop={true} src={pedroAudio}/>
                {
                    !fedStatus ?
                    <h1 className="text-3xl font-mono font-bold text-slate-300">
                        Feed Pedro?
                    </h1>
                    : fedStatus === 1 ? 
                    <div className='flex flex-row h-fit w-fit justify-evenly align-middle pt-8'>
                        {SummonPedros(3, ['animate-pedro-3', 'animate-pedro-3', 'animate-pedro-3'])}
                    </div>
                    : <></>
                }
                <div className='flex flex-row max-h-[750px] w-full justify-evenly align-middle'>
                    {
                        fedStatus === 1 ?
                        SummonPedros(3, ['animate-pedro-1', '', 'animate-pedro-2'])
                        :
                        <Image
                        src={pedro}
                        alt="raccoon"
                        width={750}
                        height={750}
                        className='rounded-full flex h-auto w-auto overflow-hidden'
                        />
                    }
                </div>
                {
                    fedStatus !== 1 ?
                    <div className='flex h-fit w-full justify-center align-middle'>
                        <div className='flex flex-row h-fit w-1/6 justify-between align-middle'>
                            <div className='flex flex-col gap-4 h-fit w-fit'>
                                <input
                                type='image'
                                src='/svg/borgir.svg'
                                className='size-16'
                                onClick={() => handlePedro(1)}/>
                                <h2 className='text-3xl font-semibold text-center'>
                                    Yes!
                                </h2>
                            </div>
                            <div className={`flex flex-col gap-4 ${noStyle} h-fit w-fit`}>
                                <input
                                type='image'
                                src='/svg/garbage.svg'
                                className='size-16'
                                onClick={() => handlePedro(fedStatus - 1)}/>
                                <h2 className='text-3xl font-semibold text-center'>
                                    No!!!!
                                </h2>
                            </div>
                        </div>
                    </div>
                    :
                    <div className='flex flex-row h-fit w-fit justify-evenly align-middle pb-8'>
                        {SummonPedros(3, ['animate-pedro-3', 'animate-pedro-3', 'animate-pedro-3'])}
                    </div>
                }
            </div>
        </div>
    </main>
  )
}

const SummonPedros = (numPredros: number, animations: string[]): JSX.Element => {
    if (numPredros <= 0 || (animations && animations.length !== numPredros)) {
        return <></>
    }

    const pedros: JSX.Element[] = [];

    for (let i = 0; i < numPredros; i++) {
        pedros.push(
            <Image
            src={pedroGif}
            alt="raccoon"
            width={750}
            height={750}
            className={`rounded-full flex h-auto w-auto overflow-hidden ${animations[i]}`}
            />
        )
    }

    return (
        <>
            {pedros}
        </>
    )
}
