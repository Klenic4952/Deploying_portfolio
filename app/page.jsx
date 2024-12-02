// app/home.jsx is the UI for the '/' URL

import { Suspense } from "react";
import About from "./about/page";
import Education from "./education/page";
import Projects from "./projects/page";
import Contact from "./contact/page";
import Experience from "./experience/page";
import Loading from "./loading";


export default function Home() {
  return (
    <main id="content" className="pt-14 lg:pt-24 lg:w-1/2 lg:py-24">
      <section
        id="about"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
      >
        <About />
      </section>
      <section
        id="education"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
      >
        <Suspense fallback={<Loading />}>
          <Education />
        </Suspense>
      </section>
      <section
        id="projects"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24 "
      >
        <Suspense fallback={<Loading />}>
          <Projects />
        </Suspense>
      </section>
      <section
        id="experience"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
      >
        <Suspense fallback={<Loading />}>
          <Experience />
        </Suspense>
      </section>
      <section
        id="contact"
        className="mb-16 scroll-mt-16 md:mb-24 lg:scroll-mt-24"
      >
        <Suspense fallback={<Loading />}>
          <Contact />
        </Suspense>
      </section>
    </main>
  );
}
