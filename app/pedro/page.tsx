'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Home() {

    const [pedro, setPedro] = useState<string>("/images/raccoon.jpg");

  return (
    <main className="flex h-screen w-screen">
        <div className="flex h-full w-full justify-center align-middle bg-black">
            <div className="flex flex-col h-full w-full justify-center align-middle items-center gap-12">
                <h1 className="text-center text-7xl font-mono font-bold underline text-slate-300">
                    Feed Pedro?
                </h1>
                <Image
                src={pedro}
                alt="raccoon"
                width={500}
                height={500}
                className='rounded-full flex'
                />
                <div className='flex h-fit w-full justify-center align-middle'>
                    <div className='flex flex-row h-fit w-1/6 justify-between align-middle'>
                        <div className='flex flex-col gap-4 h-fit w-fit'>
                            <input
                            type='image'
                            src='/svg/borgir.svg'
                            className='size-16'
                            onClick={() => console.log("YES")}/>
                            <h2 className='text-3xl font-semibold text-center'>
                                Yes!
                            </h2>
                        </div>
                        <div className='flex flex-col gap-4 h-fit w-fit'>
                            <input
                            type='image'
                            src='/svg/garbage.svg'
                            className='size-16'
                            onClick={() => console.log("NO")}/>
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
