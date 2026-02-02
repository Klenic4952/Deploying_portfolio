import Image from "next/image";
import EventApp from "./event_app.png";
import RecipeApp from "./recipe_checker.png";
import SmartWebsite from "./smartwp.png";
import VierdaagseWebsite from "./a4d_wp.png";

export default function Projects() {
  return (
    <div className="bg-[#1B0F1C] text-beigelight p-8 pt-5 lg:p-10 rounded-xl text-[17px]">
      <div className="sticky top-0 -mx-2 px-3 pt-5 pb-2 mb-4 bg-[#1B0F1C] border-b-2 border-beige md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="lg:sr-only">PROJECTEN</h2>
      </div>
      <div>
        <div>
          <h3 className="text-midpurple font-bold text-center text-[24px]">
            Avond4daagse Havelte
          </h3>
          <a href="https://avond4daagsehavelte.nl/" target="blank">
            <Image
              src={VierdaagseWebsite}
              alt="Avond4daagse Havelte"
              width={550}
              height={298}
              className="border-solid border-8 border-midpurple rounded-lg mx-auto mt-10"
              sizes="(min-width: 1340px) 325px, (min-width: 1040px) calc(30vw - 71px), (min-width: 780px) calc(70vw - 123px), calc(70vw - 90px)"
              style={{
                width: "75%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div>
          <p className="text-beigelight my-8">
            Mijn laatste project was het bouwen van een website voor Avond4daagse Havelte. Na het succes van de 
            Avond4daagse in 2025, vond het bestuur het nu hoog tijd voor een eigen website. Ik vond het erg leuk
            om deze website voor dit mooie doel te mogen maken. Ik bouwde deze website met {" "}
            <a
              href="https://wordpress.com/nl/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              WordPress
            </a>{" "}
            en {" "}
            <a
              href="https://elementor.com/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              Elementor
            </a>
            . Als basis heb ik voor het{" "}
            <a
              href="https://creativethemes.com/blocksy/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              Blocksy-Theme
            </a>{" "}
            gekozen. Daarbij heb ik geen standaard templates gebruikt, maar zelf
            de pagina`s opgebouwd. Waar nodig heb ik CSS naar eigen wens
            aangepast.
          </p>
        </div>
      </div>
      <div>
        <div>
          <h3 className="text-midpurple font-bold text-center text-[24px]">
            SMART Voedingsadvies
          </h3>
          <a href="https://smartvoedingsadvies.nl/" target="blank">
            <Image
              src={SmartWebsite}
              alt="SMART Voedingsadvies"
              width={550}
              height={374}
              className="border-solid border-8 border-midpurple rounded-lg mx-auto mt-10"
              sizes="(min-width: 1340px) 325px, (min-width: 1040px) calc(30vw - 71px), (min-width: 780px) calc(70vw - 123px), calc(70vw - 90px)"
              style={{
                width: "75%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div>
          <p className="text-beigelight my-8">
            Deze website voor mijn praktijk SMART Voedingsadvies heb ik gemaakt
            na het voltooien van de opleiding. Ook deze website is gemaakt met{" "}
            <a
              href="https://wordpress.com/nl/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              WordPress,
            </a>{" "}
            {" "}
            <a
              href="https://elementor.com/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              Elementor {" "}
            </a>
            en het {" "}
            <a
              href="https://creativethemes.com/blocksy/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              Blocksy-Theme.
            </a>{" "}
            Ook hier zijn geen standaard templates gebruikt, maar heb ik zelf
            de pagina`s opgebouwd. Waar nodig heb ik CSS naar eigen wens
            aangepast.
          </p>
        </div>
      </div>
      <div>
        <div className="mt-12">
          <h3 className="text-midpurple font-bold text-center text-[24px]">
            Event App
          </h3>
          <a href="https://react-event-app-2024.netlify.app/" target="blank">
            <Image
              src={EventApp}
              alt="Event App"
              width={550}
              height={273}
              className="border-solid border-8 border-midpurple rounded-lg mx-auto mt-10"
              sizes="(min-width: 1340px) 286px, (min-width: 1040px) calc(27.86vw - 82px), (min-width: 780px) calc(65vw - 130px), calc(65vw - 99px)"
              style={{
                width: "75%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div>
          <p className="text-beigelight my-8">
            Dit was het finale assessment voor de opleiding in 2024. De React
            Applicatie is gemaakt met behulp van{" "}
            <a
              href="https://vite.dev/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              Vite.js
            </a>
            ,{" "}
            <a
              href="https://reactrouter.com/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              React Router
            </a>{" "}
            en{" "}
            <a
              href="https://www.chakra-ui.com/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              Chakra UI
            </a>
            . Het is ontworpen met als doel het zoeken van, bewerken, toevoegen
            of verwijderen van evementen uit een database. Deze applicatie is
            alleen voor demonstratie doeleinden, de database is gekoppeld aan{" "}
            <a
              href="https://my-json-server.typicode.com/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              My JSON Server
            </a>
            .
          </p>
        </div>
      </div>
      <div>
        <div className="mt-12">
          <h3 className="text-midpurple font-bold text-center text-[24px]">
            Recipe Checker
          </h3>
          <a href="https://recipe-checker-app-2023.netlify.app/" target="blank">
            <Image
              src={RecipeApp}
              alt="Event App"
              width={550}
              height={264}
              className="border-solid border-8 border-midpurple rounded-lg mx-auto mt-10"
              sizes="(min-width: 1340px) 325px, (min-width: 1040px) calc(30vw - 71px), (min-width: 780px) calc(70vw - 123px), calc(70vw - 90px)"
              style={{
                width: "75%",
                height: "auto",
              }}
            />
          </a>
        </div>
        <div>
          <p className="text-beigelight my-8">
            Deze app was een opdracht voor de opleiding eind 2023. Deze React
            applicatie is gemaakt met behulp van{" "}
            <a
              href="https://react.dev/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              React
            </a>{" "}
            en{" "}
            <a
              href="https://www.chakra-ui.com/"
              className="text-purplelight hover:text-beigelight"
              target="blank"
            >
              Chakra UI
            </a>
            . Het biedt gebruikers de mogelijkheid om recepten te zoeken op
            basis van dieet-voorkeuren, gezondheidslabels of de naam van het
            recept. Wanneer de gebruiker een recept selecteert, wordt er
            gedetailleerde informatie met betrekking tot het gekozen recept
            getoond.
          </p>
        </div>
      </div>
    </div>
  );
}
