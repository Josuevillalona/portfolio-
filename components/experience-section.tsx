import AnimateInView from "./animate-in-view"

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Operations Manager",
      company: "OWN IT Coaching (Remote)",
      period: "Aug 2021 - Present",
      responsibilities: [
        "Optimized client journey from onboarding to engagement, resulting in 60% reduction in administrative overhead",
        "Reduced backend friction by implementing automated systems and standard operating procedures",
        "Designed and implemented comprehensive SOPs for team processes and client interactions",
      ],
    },
    {
      role: "Senior Content Manager & EA",
      company: "Adapt CrossFit (Remote)",
      period: "Jun 2020 - Jun 2022",
      responsibilities: [
        "Created workout videos and content, managing distribution across multiple platforms",
        "Provided customer support and solved technical issues for platform subscribers",
        "Assisted with project audits and system improvements to enhance user experience",
      ],
    },
  ]

  return (
    <section className="px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <AnimateInView>
          <h2 className="mb-10 text-center font-sans text-3xl font-bold tracking-tight sm:text-4xl">
            Experience Snapshot
          </h2>
        </AnimateInView>

        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <AnimateInView key={index} delay={index * 0.2}>
              <div className="border-l-4 border-[#3182CE] pl-6">
                <h3 className="text-2xl font-bold text-[#1A202C] dark:text-[#E2E8F0]">{exp.role}</h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  {exp.company} | {exp.period}
                </p>
                <ul className="ml-5 list-disc space-y-2 text-gray-700 dark:text-gray-300">
                  {exp.responsibilities.map((resp, idx) => (
                    <li key={idx} className="font-body">
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateInView>
          ))}
        </div>
      </div>
    </section>
  )
}
