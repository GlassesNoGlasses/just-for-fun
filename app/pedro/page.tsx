'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

    const [pedro, setPedro] = useState<string>("/images/raccoon.jpg");
    const [fedStatus, setFedStatus] = useState<number>(0);
    const [noStyle, setNoStyle] = useState<string>('opacity-100');

    const handlePedro = (status: number) => {
        setFedStatus(status);

        switch (status) {
            case 1:
                setPedro("/gif/PEDRO.gif");
                break;
            case -1:
                setPedro("/gif/raccoon-sad.gif");
                setNoStyle('opacity-50');
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
        if (status === 1) {
        } else {
            setPedro("/gif/raccoon-sad.gif");
        }
    }

  return (
    <main className="flex h-screen w-screen">
        <div className="flex h-full w-full justify-center align-middle bg-black overflow-y-auto">
            <div className="flex flex-col h-full w-full justify-center align-middle items-center gap-12 overflow-y-auto">
                {
                    !fedStatus ?
                    <h1 className="text-3xl font-mono font-bold text-slate-300">
                        Feed Pedro?
                    </h1>
                    : <></>
                }
                <Image
                src={pedro}
                alt="raccoon"
                width={750}
                height={750}
                className='rounded-full flex h-auto w-auto overflow-hidden'
                />
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
            </div>
        </div>
    </main>
  )
}
