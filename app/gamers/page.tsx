import { TicTac } from "../tic-tac-plus/TicTacPlus";



export default function Home() {
    return (
        <main className="h-screen w-screen">
            <div className="flex h-full w-full bg-main">
                <div className="flex flex-row h-full w-full justify-center align-middle">
                    <TicTac>
                    </TicTac>
                </div>
            </div>
        </main>
    )
}
