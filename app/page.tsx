
import Link from "next/link";
import { ApplicationSimulator, HCAMI, ISIY, Pedro } from "./constants/CollageIcons";
import { Collage } from "./components/collage/Collage";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen">
      <div className="flex h-screen w-screen justify-center align-middle bg-[#1d4d6f]">
        <div className="flex flex-col gap-8 h-full w-full justify-center align-middle">
          <h1 className="text-center text-7xl font-mono underline">
            Just For Fun
          </h1>
          <div className="flex flex-row gap-12 h-fit w-full align-middle justify-center">
            <Link href="/pedro">
              <Collage {...Pedro} />
            </Link>
            <Link href="/issheintoyou">
              <Collage {...ISIY} />
            </Link>
            <Link href="application-simulator">
              <Collage {...ApplicationSimulator} />
            </Link>
          </div>
          <h1 className="text-center text-5xl font-mono underline mt-12">
            Coming Soon...
          </h1>
          <div className="flex flex-row gap-12 h-fit w-full align-middle justify-center">
              <Collage {...HCAMI} />
          </div>
        </div>
      </div>
    </main>
  );
}
