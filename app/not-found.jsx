import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center pt-25 lg:w-1/2 lg:py-60">
      <h2 className="text-2xl text-midpurple">Excuus</h2>
      <p>We kunnen de gevraagde pagina niet vinden.</p>
      <p className="font-bold mt-6">
        <Link href="/">Ga terug</Link>
      </p>
    </main>
  );
}
