import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import AnimateInView from "./animate-in-view"

export default function ProjectsSection() {
  const projects = [
    {
      title: "Optimized Client Journey & Backend Processes (Coaching Business)",
      challenge: "Client onboarding was disjointed across multiple platforms causing confusion and delays.",
      solution:
        "Streamlined the entire client journey from sign-up to session booking using integrated automation between HubSpot, Zapier, and custom applications.",
      result:
        "Reduced onboarding time by 60% and eliminated manual data entry, allowing coaches to focus on clients rather than administration.",
    },
    {
      title: "Automated Sales/CRM Pipeline Management",
      challenge: "Sales team was spending excessive time on manual data entry and follow-up scheduling.",
      solution:
        "Implemented a custom CRM workflow with automated lead scoring, follow-up scheduling, and performance analytics.",
      result:
        "Increased sales team capacity by 35% while improving lead conversion rates by 28% through consistent and timely follow-ups.",
    },
    {
      title: "AI-Powered Tool for Lab Report Analysis (Concept)",
      challenge: "Researchers spending hours interpreting and analyzing complex laboratory data reports.",
      solution:
        "Developing an AI tool to extract key insights, identify patterns, and generate summary reports from raw lab data.",
      result: "Projected 70% reduction in analysis time with improved accuracy and standardized reporting format.",
    },
  ]

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateInView>
          <h2 className="mb-12 text-center font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Projects: Enabling Flow
          </h2>
        </AnimateInView>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <AnimateInView key={index} delay={index * 0.2}>
              <Card className="h-full border-gray-200 dark:border-gray-700 dark:bg-gray-800">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-[#1A202C] dark:text-[#E2E8F0]">
                    {project.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-[#3182CE]">Challenge:</h4>
                      <p className="font-body text-gray-700 dark:text-gray-300">{project.challenge}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#3182CE]">Solution:</h4>
                      <p className="font-body text-gray-700 dark:text-gray-300">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#3182CE]">Result:</h4>
                      <p className="font-body text-gray-700 dark:text-gray-300">{project.result}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
