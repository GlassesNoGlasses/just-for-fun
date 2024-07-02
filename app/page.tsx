
import Link from "next/link";
import { HCAMI, Pedro } from "./constants/CollageIcons";
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
            <Link href="/howcookedami">
              <Collage {...HCAMI} />
            </Link>
            <Link href="/pedro">
              <Collage {...Pedro} />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
