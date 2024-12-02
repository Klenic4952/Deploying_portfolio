import Image from "next/image";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="bg-brown p-8 pt-5 lg:p-10 rounded-xl text-[17px]">
      <div className="sticky top-0 -mx-2 px-3 pt-5 pb-2 mb-4 bg-brown border-b-2 border-black md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="lg:sr-only">WERKERVARING</h2>
      </div>
      <p className="text-purpledark">
        Mijn werkzame leven begon bij de Rabobank en ik heb daar bijna 25 jaar
        met veel plezier en voldoening gewerkt. Het was een spannende stap om
        mijn eigen weg te gaan. Check mijn CV voor mijn profiel en mijn
        werkervaring tot nu toe.
      </p>
      <Link href="/Image/CV.pdf" target="blank" locale={false} rel="noopener noreferrer">
        <Image
          src="/Image/CV.png"
          alt="CV"
          width={354}
          height={500}
          className="rounded-lg mx-auto mt-10"
          //sizes="(min-width: 1340px) 325px, (min-width: 1040px) calc(30vw - 71px), (min-width: 780px) calc(70vw - 123px), calc(70vw - 90px)"
          style={{
            width: "65%",
            height: "auto",
          }}
        />
      </Link>
    </div>
  );
}
