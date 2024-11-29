import Image from "next/image";
import Link from "next/link";
import Certificate from "./certificate.png";
import SkillsList from "./SkillsList";
import { Suspense } from "react";
import Loading from "../loading";

export default function Education() {
  return (
    <div className="bg-midpurple p-6 pt-5 lg:p-10 rounded-xl text-[17px]">
      <div className="sticky top-0 -mx-2 px-3 pt-5 pb-2 mb-4 bg-midpurple border-b-2 border-black md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="lg:sr-only">OPLEIDING</h2>
      </div>
      <p className="text-purpledark">
        In mei 2024 slaagde ik voor de opleiding Front-end Development bij Winc
        Academy. Check hieronder mijn Front-end certificaat.
      </p>
      <Link
        href="https://certificates.wincacademy.com/655599e5-d0a0-4c5a-8377-353d4589c4d5#gs.9i91ce"
        target="blank"
      >
        <Image
          src={Certificate}
          alt="Certificate Front-end Development"
          width={550}
          height={390}
          className="rounded-lg mx-auto mt-10"
          sizes="(min-width: 1340px) 325px, (min-width: 1040px) calc(30vw - 71px), (min-width: 780px) calc(70vw - 123px), calc(70vw - 90px)"
          style={{
            width: "75%",
            height: "auto",
          }}
        />
      </Link>
      <Suspense fallback={<Loading />}>
        <SkillsList />
      </Suspense>
    </div>
  );
}
