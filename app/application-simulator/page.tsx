'use client';

export default function Home() {
    return (
        <main className="w-screen h-screen">
            <div className="flex w-full h-full bg-main">
                <div className="flex flex-col w-1/2 h-full bg-white">
                    <div className="flex justify-center items-center w-full h-1/2 bg-white">
                        <h1 className="text-5xl font-bold">Welcome to the Application Simulator</h1>
                    </div>
                    <div className="flex justify-center items-center w-full h-1/2 bg-white">
                        <p className="text-2xl font-bold">This is a simple application that simulates a real-world application.</p>
                    </div>
                </div>
                <div className="flex w-1/2 h-full bg-white">
                    <div className="flex flex-col w-full h-full bg-white">
                        <div className="flex justify-center items-center w-full h-1/2 bg-white">
                            <h1 className="text-5xl font-bold">Welcome to the Application Simulator</h1>
                        </div>
                        <div className="flex justify-center items-center w-full h-1/2 bg-white">
                            <p className="text-2xl font-bold">This is a simple application that simulates a real-world application.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
