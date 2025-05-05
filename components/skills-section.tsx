import { Badge } from "@/components/ui/badge"
import AnimateInView from "./animate-in-view"

export default function SkillsSection() {
  const skills = [
    "Process Improvement",
    "Operations Management",
    "Workflow Analysis",
    "Zapier",
    "Make",
    "n8n",
    "HubSpot",
    "AI Application",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "CSS",
    "TypeScript",
    "Project Management",
    "Asana",
    "Slack",
    "Google Suite",
    "Creative Problem Solving",
    "Analytical Skills",
  ]

  return (
    <section className="bg-gray-50 px-4 py-20 dark:bg-gray-900">
      <div className="mx-auto max-w-4xl">
        <AnimateInView>
          <h2 className="mb-10 text-center font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            Core Skills & Technologies
          </h2>
        </AnimateInView>

        <AnimateInView delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge
                key={index}
                className="bg-[#E2E8F0] px-4 py-2 text-base font-normal text-[#1A202C] hover:bg-gray-300 dark:bg-gray-700 dark:text-[#E2E8F0] dark:hover:bg-gray-600"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </AnimateInView>
      </div>
    </section>
  )
}
