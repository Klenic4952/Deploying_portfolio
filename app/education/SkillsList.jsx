import { Icons } from "./icons";

async function getSkills() {
  const skills = await fetch ("https://my-json-server.typicode.com/Klenic4952/skills/")
  const skillswinc = await fetch("https://my-json-server.typicode.com/Klenic4952/skills/skillswinc");
  const skillscurrent = await fetch("https://my-json-server.typicode.com/Klenic4952/skills/skillscurrent");

  if (!skills.ok) {
    throw Error("Could not find skills")
  }

  return {
    skillswinc: await skillswinc.json(),
    skillscurrent: await skillscurrent.json(),
  }
}

export default async function SkillsList() {
  // Haal de volledige JSON en split de data in skillswinc en skillscurrent
  const { skillswinc, skillscurrent } = await getSkills();

  return (
    <>
      <h3 className="font-bold mt-12 text-[20px]">Vaardigheden uit de opleiding</h3>
      <div className="flex flex-wrap gap-4 p-4 mt-5">
        {skillswinc.map((skill) => {
          const IconComponent = Icons[skill.icon];
          return (
            <div key={skill.id} className="flex flex-col items-center">
              {IconComponent && (
                <IconComponent className="w-12 h-12 text-beige" />
              )}
              <span className="mt-2 text-sm font-semibold">{skill.name}</span>
            </div>
          );
        })}
      </div>
      <h3 className="font-bold mt-12 text-[20px]">Nu mee aan het pionieren</h3>
      <div className="flex flex-wrap gap-4 p-4 mt-5">
        {skillscurrent.map((skill) => {
          const IconComponent = Icons[skill.icon];
          return (
            <div key={skill.id} className="flex flex-col items-center">
              {IconComponent && (
                <IconComponent className="w-12 h-12 text-beige" />
              )}
              <span className="mt-2 text-sm font-semibold">{skill.name}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
